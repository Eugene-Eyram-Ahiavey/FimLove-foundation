import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/news', label: 'News' },
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
        <header className={`fixed top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'}`}>
            <div className="max-w-container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 no-underline text-gray-900 z-[1001]">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <Heart size={24} fill="currentColor" />
                    </div>
                    <span className="font-heading text-2xl font-extrabold text-gray-900">
                        Firm<span className="text-primary">Love</span>
                    </span>
                </Link>

                <nav className={`flex items-center gap-1 max-[900px]:fixed max-[900px]:top-0 max-[900px]:w-[280px] max-[900px]:h-screen max-[900px]:bg-white max-[900px]:flex-col max-[900px]:items-start max-[900px]:pt-20 max-[900px]:px-6 max-[900px]:pb-8 max-[900px]:gap-0 max-[900px]:shadow-xl max-[900px]:z-[1000] max-[900px]:transition-all max-[900px]:duration-300 ${menuOpen ? 'max-[900px]:right-0' : 'max-[900px]:-right-full'}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-3 py-2 rounded-md text-sm font-medium no-underline transition-all duration-150 max-[900px]:w-full max-[900px]:py-3 max-[900px]:text-base max-[900px]:border-b max-[900px]:border-gray-200 ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary hover:bg-primary-50'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/donate" className="hidden max-[900px]:flex max-[900px]:mt-6 max-[900px]:w-full max-[900px]:text-center inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-semibold text-sm bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                        Donate Now
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <Link to="/donate" className="max-[900px]:hidden inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-semibold text-sm bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                        Donate Now
                    </Link>
                    <button
                        className="hidden max-[900px]:flex w-10 h-10 items-center justify-center rounded-md text-gray-900 z-[1001]"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && <div className="hidden max-[900px]:block fixed inset-0 bg-black/40 z-[999]" onClick={() => setMenuOpen(false)} />}
        </header>
    )
}
