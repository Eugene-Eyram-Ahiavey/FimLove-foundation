import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/donate', label: 'Get Involved' },
    { path: '/contact', label: 'Contact' },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    // Determine if the current page has a dark hero background
    const isDarkPage = ['/donate', '/contact'].includes(location.pathname)
    
    // Header is in "Light Mode" (white text/assets) ONLY when on a dark page and NOT scrolled
    const isLightMode = isDarkPage && !scrolled

    // Dynamic Classes
    const headerBgClass = scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl py-2.5 px-3 border-gray-100' : 'bg-transparent shadow-none py-3 px-3 border-transparent'
    
    const textColorClass = isLightMode ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-gray-700 hover:text-primary hover:bg-gray-100/50'
    const activeTextClass = isLightMode ? 'text-white font-bold' : 'text-primary font-semibold'
    
    const buttonClass = isLightMode 
        ? 'bg-white text-primary shadow-[0_4px_14px_rgba(255,255,255,0.25)] hover:bg-gray-50' 
        : 'bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700'

    // We assume firmlove-logo.png is the light version. If not, the user will see it and can swap it.
    const logoSrc = isLightMode ? '/src/assets/images/firmlove-logo.png' : '/src/assets/images/firmlove-dark.png'

    return (
        <header className="fixed top-6 left-0 right-0 z-[1000] flex justify-center px-4 md:px-6 pointer-events-none">
            <div className={`w-full max-w-5xl rounded-full flex items-center justify-between transition-all duration-500 pointer-events-auto border ${headerBgClass}`}>
                
                <Link to="/" className="flex items-center gap-2 no-underline z-[1001] pl-4">
                    <img src={logoSrc} alt="FirmLove Foundation Logo" className="h-8 w-auto transition-opacity duration-300" />
                </Link>

                <nav className={`flex items-center gap-1 max-[900px]:fixed max-[900px]:top-0 max-[900px]:w-[280px] max-[900px]:h-screen max-[900px]:bg-white max-[900px]:flex-col max-[900px]:items-start max-[900px]:pt-20 max-[900px]:px-6 max-[900px]:pb-8 max-[900px]:gap-0 max-[900px]:shadow-xl max-[900px]:z-[1000] max-[900px]:transition-all max-[900px]:duration-300 ${menuOpen ? 'max-[900px]:right-0' : 'max-[900px]:-right-full'}`}>
                    {navLinks.map(link => {
                        const isActive = location.pathname === link.path
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-full text-[0.9rem] font-medium no-underline transition-all duration-150 max-[900px]:w-full max-[900px]:py-3 max-[900px]:text-base max-[900px]:border-b max-[900px]:border-gray-200 max-[900px]:rounded-none max-[900px]:text-gray-900 ${
                                    isActive ? activeTextClass : textColorClass
                                }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                    
                    {/* Mobile Button (Always Standard Colors) */}
                    <Link to="/donate" className="hidden max-[900px]:flex max-[900px]:mt-6 max-[900px]:w-full max-[900px]:text-center items-center justify-center gap-2 px-5 py-2 rounded-full font-semibold text-sm bg-primary text-white shadow-md hover:bg-primary-700 transition-all duration-250">
                        Donate Now
                    </Link>
                </nav>

                <div className="flex items-center gap-2 pr-1">
                    {/* Desktop Button (Dynamic Colors) */}
                    <Link to="/donate" className={`max-[900px]:hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-250 hover:-translate-y-0.5 ${buttonClass}`}>
                        Donate Now
                    </Link>
                    
                    {/* Mobile Toggle Button */}
                    <button
                        className={`hidden max-[900px]:flex w-10 h-10 items-center justify-center rounded-full z-[1001] transition-colors ${isLightMode && !menuOpen ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-900'}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    )
}
