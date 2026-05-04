import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Send, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

    return (
        <>
            <Helmet>
                <title>Contact Us — FirmLove Foundation</title>
                <meta name="description" content="Get in touch with FirmLove Foundation. We'd love to hear from you — reach out for enquiries, partnerships, or support." />
            </Helmet>

            <section className="page-hero bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80')] bg-cover bg-center">
                <div className="page-hero-overlay" />
                <div className="max-w-container mx-auto px-6 page-hero-content">
                    <span className="section-label">Reach Out</span>
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you. Let's start a conversation.</p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <div>
                            <h2 className="mb-4">Get In Touch</h2>
                            <p className="text-[1.02rem] mb-10">Have a question, want to partner, or just want to say hello? Don't hesitate to reach out.</p>

                            <div className="space-y-6 mb-10">
                                {[
                                    { icon: <MapPin size={20} />, title: 'Our Office', text: '123 Foundation Street, Lagos, Nigeria' },
                                    { icon: <Phone size={20} />, title: 'Phone', text: '+234 800 000 0000' },
                                    { icon: <Mail size={20} />, title: 'Email', text: 'info@firmlove.org' },
                                    { icon: <Clock size={20} />, title: 'Working Hours', text: 'Mon – Fri: 9:00 AM – 5:00 PM' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-11 h-11 shrink-0 bg-primary-50 rounded-lg flex items-center justify-center text-primary">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <strong className="block text-[0.95rem] mb-0.5">{item.title}</strong>
                                            <p className="text-sm m-0">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h4 className="mb-4">Follow Us</h4>
                                <div className="flex gap-2">
                                    {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                        <a key={i} href="#" aria-label={Icon.displayName} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-200">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="bg-white p-10 rounded-xl shadow-md border border-gray-200" onSubmit={e => e.preventDefault()}>
                            <h3 className="mb-8">Send Us a Message</h3>
                            <div className="mb-6">
                                <label htmlFor="contact-name" className="block font-medium mb-2 text-gray-900 text-sm">Full Name</label>
                                <input id="contact-name" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="contact-email" className="block font-medium mb-2 text-gray-900 text-sm">Email Address</label>
                                <input id="contact-email" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="contact-subject" className="block font-medium mb-2 text-gray-900 text-sm">Subject</label>
                                <input id="contact-subject" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="What is this about?" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="contact-message" className="block font-medium mb-2 text-gray-900 text-sm">Message</label>
                                <textarea id="contact-message" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all min-h-[120px] resize-y" placeholder="Your message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                            </div>
                            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-lg bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="w-full leading-[0]">
                <iframe
                    title="FirmLove Foundation Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46312584616!2d3.1191397!3d6.5480357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1709000000000"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full block"
                />
            </section>
        </>
    )
}
