import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import firmloveLogo from "../assets/images/firmlove-dark.png";

export default function Footer() {
    return (
        <footer className="bg-[#F4EFE6] text-[#15131A] pt-20 pb-10 rounded-t-[3rem] mt-[-2rem] relative z-20 font-sans">
            <div className="max-w-[1300px] mx-auto px-6 md:px-12">
                
                {/* Logo Top */}
                <div className="mb-16">
                    <img src={firmloveLogo} alt="FirmLove Foundation" className="h-10 opacity-90" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-black/10">
                    
                    {/* Column 1: Core Values & Newsletter */}
                    <div className="lg:col-span-6 pr-0 lg:pr-20">
                        <h4 className="text-[#15131A] text-xl font-semibold tracking-wide mb-6">Core Values</h4>
                        <p className="text-gray-600 text-[1.05rem] leading-[1.8] mb-12 max-w-md">
                            At FirmLove, we prioritize compassion, integrity, and inclusivity. These values guide our actions as we work tirelessly to bridge the gap between those in need and those willing to help.
                        </p>

                        <h4 className="text-[#15131A] text-xl font-semibold tracking-wide mb-6">Sign up for our newsletter</h4>
                        <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 px-6 py-4 bg-transparent border border-black/10 rounded-full text-[#15131A] placeholder:text-gray-500 focus:outline-none focus:border-[#c99472] transition-colors"
                            />
                            <button type="submit" className="px-8 py-4 rounded-full font-semibold text-white bg-[#c99472] hover:bg-[#b07c5b] transition-colors duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#15131A] text-xl font-semibold tracking-wide mb-6">Useful links</h4>
                        <ul className="space-y-4">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'Our Mission' },
                                { to: '/programs', label: 'Why Choose Us' },
                                { to: '/news', label: 'Projects' },
                            ].map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-gray-600 hover:text-[#c99472] transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Contacts & Socials */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[#15131A] text-xl font-semibold tracking-wide mb-6">Our contacts</h4>
                        <ul className="space-y-6 mb-10">
                            <li className="flex items-start gap-4 text-gray-600">
                                <Mail size={20} className="mt-0.5 shrink-0 text-[#c99472]" />
                                <span>firmlovefoundation@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-600">
                                <Phone size={20} className="mt-0.5 shrink-0 text-[#c99472]" />
                                <span>+233 55 287 9130</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-600">
                                <MapPin size={20} className="mt-0.5 shrink-0 text-[#c99472]" />
                                <span>Gbawe, Accra, Ghana</span>
                            </li>
                        </ul>

                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:text-[#c99472] hover:border-[#c99472] hover:bg-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} FirmLove Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
