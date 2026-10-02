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

    return (
        <header className="fixed top-6 left-0 right-0 z-[1000] flex justify-center px-4 md:px-6 pointer-events-none">
            <div className={`w-full max-w-5xl rounded-full flex items-center justify-between transition-all duration-500 pointer-events-auto border ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl py-2.5 px-3 border-gray-100' : 'bg-transparent shadow-none py-3 px-3 border-transparent'}`}>
                <Link to="/" className="flex items-center gap-2 no-underline text-gray-900 z-[1001] pl-4">
                    <img src="/src/assets/images/firmlove-dark.png" alt="FirmLove Foundation Logo" className="h-8 w-auto" />
                </Link>

                <nav className={`flex items-center gap-1 max-[900px]:fixed max-[900px]:top-0 max-[900px]:w-[280px] max-[900px]:h-screen max-[900px]:bg-white max-[900px]:flex-col max-[900px]:items-start max-[900px]:pt-20 max-[900px]:px-6 max-[900px]:pb-8 max-[900px]:gap-0 max-[900px]:shadow-xl max-[900px]:z-[1000] max-[900px]:transition-all max-[900px]:duration-300 ${menuOpen ? 'max-[900px]:right-0' : 'max-[900px]:-right-full'}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-4 py-2 rounded-full text-[0.9rem] font-medium no-underline transition-all duration-150 max-[900px]:w-full max-[900px]:py-3 max-[900px]:text-base max-[900px]:border-b max-[900px]:border-gray-200 max-[900px]:rounded-none ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary hover:bg-gray-100/50'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/donate" className="hidden max-[900px]:flex max-[900px]:mt-6 max-[900px]:w-full max-[900px]:text-center inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-semibold text-sm bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                        Donate Now
                    </Link>
                </nav>

                <div className="flex items-center gap-2 pr-1">
                    <Link to="/donate" className="max-[900px]:hidden inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                        Donate Now
                    </Link>
                    <button
                        className="hidden max-[900px]:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 z-[1001]"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {menuOpen && <div className="hidden max-[900px]:block fixed inset-0 bg-black/40 z-[999] pointer-events-auto" onClick={() => setMenuOpen(false)} />}
        </header>
    )
}
