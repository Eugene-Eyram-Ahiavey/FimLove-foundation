import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import firmloveLogo from "../assets/images/firmlove-dark.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
                    {/* About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={firmloveLogo}/>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            FirmLove Foundation is dedicated to creating lasting positive change
                            in communities through education, health, and sustainable development programs.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" aria-label={Icon.displayName} className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-semibold text-lg mb-5">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/about', label: 'About Us' },
                                { to: '/programs', label: 'Our Programs' },
                                { to: '/news', label: 'Latest News' },
                                { to: '/gallery', label: 'Gallery' },
                                { to: '/donate', label: 'Get Involved' },
                                { to: '/contact', label: 'Contact' },
                            ].map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm inline-block">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-heading font-semibold text-lg mb-5">Contact Us</h4>
                        <ul className="space-y-4">
                            {[
                                { icon: <MapPin size={16} />, text: 'Gbawe, Accra, Ghana' },
                                { icon: <Phone size={16} />, text: '+233 55 287 9130' },
                                { icon: <Mail size={16} />, text: 'firmlovefoundation@gmail.com' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <span className="text-primary mt-0.5 shrink-0">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-heading font-semibold text-lg mb-5">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates on our impact.</p>
                        <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                            />
                            <button type="submit" className="inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-sm bg-primary text-white hover:bg-primary-700 transition-all duration-250">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} FirmLove Foundation. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
