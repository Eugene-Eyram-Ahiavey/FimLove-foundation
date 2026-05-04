import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Heart, Users, Handshake, CreditCard, Building, Wallet } from 'lucide-react'

export default function Donate() {
    const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', interest: '', message: '' })
    const [partnerForm, setPartnerForm] = useState({ org: '', contact: '', email: '', proposal: '' })

    return (
        <>
            <Helmet>
                <title>Get Involved — FirmLove Foundation</title>
                <meta name="description" content="Donate, volunteer, or partner with FirmLove Foundation to help create lasting positive change in communities." />
            </Helmet>

            <section className="page-hero bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80')] bg-cover bg-center">
                <div className="page-hero-overlay" />
                <div className="max-w-container mx-auto px-6 page-hero-content">
                    <span className="section-label">Join Our Mission</span>
                    <h1>Get Involved</h1>
                    <p>There are many ways to support our work and help transform lives.</p>
                </div>
            </section>

            {/* Donation Section */}
            <section className="py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="section-label">Support Our Work</span>
                        <h2 className="mb-4">Make a Donation</h2>
                        <p className="max-w-[600px] mx-auto text-lg">Every contribution, no matter the size, helps us create lasting impact in communities.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <CreditCard size={32} />, title: 'Bank Transfer', desc: 'Transfer directly to our foundation account.', details: [{ label: 'Bank', value: 'First Bank' }, { label: 'Account', value: '0123456789' }, { label: 'Name', value: 'FirmLove Foundation' }] },
                            { icon: <Wallet size={32} />, title: 'Mobile Payment', desc: 'Send via mobile money or digital wallet.', details: [{ label: 'Phone', value: '+233 55 285 9130' }, { label: 'Platform', value: 'Any mobile money' }] },
                            { icon: <Building size={32} />, title: 'In-Kind Donations', desc: 'Donate supplies, equipment, or services.', details: [{ label: '', value: 'Contact us to arrange pickup or delivery of material donations.' }] },
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-10 rounded-xl border border-gray-200 text-center transition-all duration-250 hover:shadow-lg hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl flex items-center justify-center text-primary">
                                    {card.icon}
                                </div>
                                <h3 className="mb-2">{card.title}</h3>
                                <p className="text-sm mb-6">{card.desc}</p>
                                <div className="bg-gray-50 p-4 rounded-lg text-left text-sm">
                                    {card.details.map((d, j) => (
                                        <div key={j} className="py-1 text-gray-600">
                                            {d.label && <strong className="text-gray-900">{d.label}:</strong>} {d.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteer Form */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Users size={32} />
                            </div>
                            <h2 className="mb-4">Become a Volunteer</h2>
                            <p className="text-[1.02rem] mb-8">
                                Join our team of passionate volunteers making a difference on the ground.
                                Whether you can give a few hours or a few days, your time and skills matter.
                            </p>
                            <ul className="space-y-4">
                                {['Make a direct impact', 'Gain meaningful experience', 'Join a caring community', 'Develop new skills'].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 text-[0.95rem]">
                                        <Heart size={16} className="text-primary shrink-0" /> {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <form className="bg-white p-10 rounded-xl shadow-md border border-gray-200" onSubmit={e => e.preventDefault()}>
                            <div className="mb-6">
                                <label htmlFor="vol-name" className="block font-medium mb-2 text-gray-900 text-sm">Full Name</label>
                                <input id="vol-name" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="Enter your full name" value={volunteerForm.name} onChange={e => setVolunteerForm({ ...volunteerForm, name: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vol-email" className="block font-medium mb-2 text-gray-900 text-sm">Email Address</label>
                                <input id="vol-email" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="you@example.com" value={volunteerForm.email} onChange={e => setVolunteerForm({ ...volunteerForm, email: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vol-interest" className="block font-medium mb-2 text-gray-900 text-sm">Area of Interest</label>
                                <select id="vol-interest" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all bg-white" value={volunteerForm.interest} onChange={e => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}>
                                    <option value="">Select an area</option>
                                    <option value="education">Education</option>
                                    <option value="health">Healthcare</option>
                                    <option value="outreach">Community Outreach</option>
                                    <option value="admin">Administration</option>
                                    <option value="events">Events & Fundraising</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="vol-message" className="block font-medium mb-2 text-gray-900 text-sm">Why do you want to volunteer?</label>
                                <textarea id="vol-message" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all min-h-[120px] resize-y" placeholder="Tell us about yourself..." value={volunteerForm.message} onChange={e => setVolunteerForm({ ...volunteerForm, message: e.target.value })} />
                            </div>
                            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-lg bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                                Sign Up as Volunteer <Users size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Partnership Form */}
            <section className="py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <form className="bg-white p-10 rounded-xl shadow-md border border-gray-200 md:order-1" onSubmit={e => e.preventDefault()}>
                            <div className="mb-6">
                                <label htmlFor="partner-org" className="block font-medium mb-2 text-gray-900 text-sm">Organization Name</label>
                                <input id="partner-org" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="Your organization" value={partnerForm.org} onChange={e => setPartnerForm({ ...partnerForm, org: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="partner-contact" className="block font-medium mb-2 text-gray-900 text-sm">Contact Person</label>
                                <input id="partner-contact" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="Full name" value={partnerForm.contact} onChange={e => setPartnerForm({ ...partnerForm, contact: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="partner-email" className="block font-medium mb-2 text-gray-900 text-sm">Email Address</label>
                                <input id="partner-email" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all" placeholder="contact@organization.com" value={partnerForm.email} onChange={e => setPartnerForm({ ...partnerForm, email: e.target.value })} />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="partner-proposal" className="block font-medium mb-2 text-gray-900 text-sm">Partnership Proposal</label>
                                <textarea id="partner-proposal" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[0.95rem] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all min-h-[120px] resize-y" placeholder="Describe how you'd like to partner with us..." value={partnerForm.proposal} onChange={e => setPartnerForm({ ...partnerForm, proposal: e.target.value })} />
                            </div>
                            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-lg bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                                Submit Proposal <Handshake size={18} />
                            </button>
                        </form>
                        <div className="md:order-2">
                            <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Handshake size={32} />
                            </div>
                            <h2 className="mb-4">Partner With Us</h2>
                            <p className="text-[1.02rem] mb-8">
                                We believe in the power of partnership. Whether you're a corporation, NGO,
                                or government body, let's collaborate to amplify our collective impact.
                            </p>
                            <ul className="space-y-4">
                                {['CSR alignment', 'Brand visibility', 'Community goodwill', 'Shared impact reporting'].map((text, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 text-[0.95rem]">
                                        <Heart size={16} className="text-primary shrink-0" /> {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
