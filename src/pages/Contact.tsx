import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

// Standard input component to match the reference image
const FormInput = ({ label, id, type = 'text', value, onChange, placeholder }: any) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-[0.95rem] text-gray-700 font-medium mb-2">
            {label}
        </label>
        {type === 'textarea' ? (
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-[#c99472] focus:ring-1 focus:ring-[#c99472] transition-colors resize-none min-h-[140px] placeholder-gray-400"
            />
        ) : (
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 focus:outline-none focus:border-[#c99472] focus:ring-1 focus:ring-[#c99472] transition-colors placeholder-gray-400"
            />
        )}
    </div>
)

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <Helmet>
                <title>Contact Us — FirmLove Foundation</title>
                <meta name="description" content="Get in touch with FirmLove Foundation. We'd love to hear from you — reach out for enquiries, partnerships, or support." />
            </Helmet>

            {/* ──────────── HERO SECTION (Matching Hopper Reference) ──────────── */}
            <section className="bg-[#3a271d] pt-40 pb-28 md:pt-48 md:pb-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
                {/* Subtle radial light for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] leading-[1.05] font-serif text-[#FDFBF7] tracking-tight mb-8">
                        Reach Out. <br/>
                        <span className="text-[#c99472] font-light italic">We're Here Always.</span>
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Every message you send brings us closer to building something meaningful together.
                    </p>
                </motion.div>
            </section>

            {/* ──────────── CONTACT CARDS (Matching UI Reference) ──────────── */}
            <section className="py-24 px-6 relative z-20 -mt-12">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        
                        {/* LEFT CARD (Espresso) */}
                        <div className="bg-[#3a271d] rounded-[2rem] p-10 md:p-14 text-white shadow-xl flex flex-col h-full border border-gray-100/10">
                            <h2 className="text-3xl md:text-4xl font-serif mb-3 text-white">Get In Touch</h2>
                            <p className="text-white/70 font-light mb-12 text-[1.05rem]">Get in touch via call, email and location</p>

                            <div className="space-y-10 flex-grow">
                                {/* Phone */}
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-[#c99472] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Call Us</p>
                                        <a href="tel:+233552879130" className="text-2xl font-serif text-white hover:text-[#c99472] transition-colors">
                                            +233 55 287 9130
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-[#c99472] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Email Us</p>
                                        <a href="mailto:firmlovefoundation@gmail.com" className="text-2xl font-serif text-white hover:text-[#c99472] transition-colors break-all">
                                            firmlovefoundation@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-[#c99472] rounded-full flex items-center justify-center text-white shrink-0 shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-sm mb-1">Location</p>
                                        <p className="text-2xl font-serif text-white">
                                            Accra, Ghana
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-16">
                                <p className="text-white/70 text-[0.95rem] mb-4">Follow Us On Social Media</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Linkedin, link: '#' },
                                        { icon: Twitter, link: '#' },
                                        { icon: Facebook, link: '#' },
                                        { icon: Instagram, link: '#' }
                                    ].map((social, i) => (
                                        <a 
                                            key={i} 
                                            href={social.link}
                                            className="w-12 h-12 bg-[#c99472] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#3a271d] transition-colors duration-300 shadow-sm"
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT CARD (White Form) */}
                        <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full">
                            <h2 className="text-3xl font-serif text-[#111827] mb-2">Send A Message</h2>
                            <p className="text-gray-500 font-light text-[0.95rem] mb-10">Please complete the form below to send a message.</p>

                            <form onSubmit={e => e.preventDefault()} className="flex-grow flex flex-col">
                                <FormInput 
                                    label="Name" 
                                    id="name" 
                                    placeholder="Enter Your Name"
                                    value={form.name} 
                                    onChange={(e: any) => setForm({...form, name: e.target.value})} 
                                />
                                
                                <FormInput 
                                    label="Email" 
                                    id="email" 
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={form.email} 
                                    onChange={(e: any) => setForm({...form, email: e.target.value})} 
                                />

                                <FormInput 
                                    label="Phone Number" 
                                    id="phone" 
                                    type="tel"
                                    placeholder="Enter Your Phone Number"
                                    value={form.phone} 
                                    onChange={(e: any) => setForm({...form, phone: e.target.value})} 
                                />
                                
                                <FormInput 
                                    label="Message" 
                                    id="message" 
                                    type="textarea"
                                    placeholder="Enter Your Message"
                                    value={form.message} 
                                    onChange={(e: any) => setForm({...form, message: e.target.value})} 
                                />
                                
                                <div className="mt-auto pt-6">
                                    <button 
                                        type="submit" 
                                        className="bg-[#c99472]/40 hover:bg-[#c99472] text-[#3a271d] hover:text-white px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ──────────── FULL BLEED MAP ──────────── */}
            <section className="w-full h-[50vh] relative group overflow-hidden">
                <iframe
                    title="FirmLove Foundation Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254054.66444876677!2d-0.3475853245468759!3d5.6025175510650965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2s!4v1709000000000"
                    className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    )
}
