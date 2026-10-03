import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { MoveRight, Plus, Minus, CreditCard, Landmark, Smartphone } from 'lucide-react'

const faqs = [
    { q: "How can I contribute to your organization?", a: "You can contribute financially through our secure online gateway, or manually via Bank Transfer or Mobile Money. You can also donate your time by volunteering." },
    { q: "Where does my donation go?", a: "100% of public donations go directly to our field initiatives. We allocate funds to pediatric healthcare, educational supplies, and essential community provisions." },
    { q: "Is my donation secure?", a: "Yes. All online payments will be processed securely through industry-standard encryption (via Paystack). We do not store your card information." },
    { q: "Can I volunteer with your organization?", a: "Absolutely. We are always looking for passionate individuals. Simply fill out the volunteer form on this page and our team will get in touch." },
    { q: "How can I stay updated on your activities?", a: "You can follow us on our social media channels or check the 'News' section of our website for the latest updates and stories from the field." }
]

const donationTiers = [50, 100, 250, 500]

// Minimal form input component
const FormInput = ({ label, id, type = 'text', value, onChange, placeholder }: any) => (
    <div className="relative mb-10 group">
        <label htmlFor={id} className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-focus-within:text-[#c99472] transition-colors">
            {label}
        </label>
        {type === 'textarea' ? (
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg text-gray-900 focus:outline-none focus:border-[#c99472] transition-colors resize-none min-h-[100px] placeholder-gray-300"
            />
        ) : (
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-gray-300 py-3 text-lg text-gray-900 focus:outline-none focus:border-[#c99472] transition-colors placeholder-gray-300"
            />
        )}
    </div>
)

export default function Donate() {
    const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', interest: '', message: '' })
    
    // Donation State
    const [selectedTier, setSelectedTier] = useState<number | 'custom'>(100)
    const [customAmount, setCustomAmount] = useState('')
    
    // Offline Payment State
    const [showOffline, setShowOffline] = useState(false)

    // FAQ State
    const [activeFaq, setActiveFaq] = useState<number | null>(null)

    const handleDonateSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Hook up Paystack here
        const amount = selectedTier === 'custom' ? customAmount : selectedTier
        console.log('Proceeding to Paystack with amount:', amount)
        alert(`Proceeding to payment for GHS ${amount}. Paystack integration coming soon!`)
    }

    return (
        <div className="bg-[#FDFBF7] min-h-screen">
            <Helmet>
                <title>Get Involved — FirmLove Foundation</title>
                <meta name="description" content="Donate or volunteer with FirmLove Foundation to help create lasting positive change in marginalized communities." />
            </Helmet>

            {/* ──────────── Editorial Hero ──────────── */}
            <section className="bg-[#1a110b] pt-40 pb-24 md:pt-56 md:pb-32 px-6 overflow-hidden relative">
                {/* Subtle radial light for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,148,114,0.15),transparent_50%)] pointer-events-none" />
                
                <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
                    <div className="max-w-4xl">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="text-[clamp(3.5rem,7vw,7.5rem)] leading-[1.05] font-serif text-[#FDFBF7] tracking-tight m-0"
                        >
                            Your Hand <br/>
                            <span className="italic text-[#c99472] font-light">In Theirs.</span>
                        </motion.h1>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:max-w-xs md:pb-4"
                    >
                        <p className="text-[#FDFBF7]/70 text-lg md:text-xl font-light leading-relaxed">
                            Every profound change begins with a single act of generosity. Choose how you want to make an impact today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ──────────── Interactive Content ──────────── */}
            <section className="py-24 md:py-40 px-6">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-20 md:gap-32">
                    
                    {/* Sticky Sidebar Navigation */}
                    <div className="hidden md:block w-1/4 relative">
                        <div className="sticky top-40 flex flex-col gap-8">
                            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">Ways to help</span>
                            <nav className="flex flex-col gap-6">
                                <a href="#donate" className="text-2xl font-serif text-gray-400 hover:text-[#111827] transition-colors">01. Donate</a>
                                <a href="#volunteer" className="text-2xl font-serif text-gray-400 hover:text-[#111827] transition-colors">02. Volunteer</a>
                                <a href="#faq" className="text-2xl font-serif text-gray-400 hover:text-[#111827] transition-colors">03. FAQs</a>
                            </nav>
                        </div>
                    </div>

                    {/* Right Side Content Blocks */}
                    <div className="w-full md:w-3/4 flex flex-col gap-32 md:gap-40">
                        
                        {/* 01. DONATE SECTION */}
                        <div id="donate" className="scroll-mt-40">
                            <div className="mb-12">
                                <span className="text-[#c99472] text-sm font-bold tracking-[0.2em] uppercase mb-4 block md:hidden">01. Donate</span>
                                <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mb-6">Financial Support</h2>
                                <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
                                    Direct contributions allow us to quickly allocate resources where they are needed most. 100% of your donation funds our field operations.
                                </p>
                            </div>

                            {/* Paystack-Ready Interactive Form */}
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                                <form onSubmit={handleDonateSubmit}>
                                    <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-6">Select Amount (GHS)</h3>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                                        {donationTiers.map(tier => (
                                            <button
                                                key={tier}
                                                type="button"
                                                onClick={() => setSelectedTier(tier)}
                                                className={`py-4 rounded-xl font-serif text-xl md:text-2xl transition-all border ${
                                                    selectedTier === tier 
                                                        ? 'border-[#111827] bg-[#111827] text-white' 
                                                        : 'border-gray-200 text-[#111827] hover:border-[#c99472]'
                                                }`}
                                            >
                                                {tier}
                                            </button>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => setSelectedTier('custom')}
                                            className={`py-4 rounded-xl font-serif text-lg md:text-xl transition-all border ${
                                                selectedTier === 'custom' 
                                                    ? 'border-[#111827] bg-[#111827] text-white' 
                                                    : 'border-gray-200 text-[#111827] hover:border-[#c99472]'
                                            }`}
                                        >
                                            Custom
                                        </button>
                                    </div>

                                    <AnimatePresence>
                                        {selectedTier === 'custom' && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden mb-8"
                                            >
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-serif text-xl">GHS</span>
                                                    <input 
                                                        type="number" 
                                                        placeholder="Enter amount"
                                                        value={customAmount}
                                                        onChange={e => setCustomAmount(e.target.value)}
                                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-16 pr-4 text-xl font-serif text-[#111827] focus:outline-none focus:border-[#c99472] transition-colors"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button type="submit" className="w-full bg-[#c99472] text-white py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#b07b5a] transition-colors flex items-center justify-center gap-3">
                                        <CreditCard size={18} /> Proceed to Donate
                                    </button>
                                </form>

                                {/* Offline Alternatives Toggle */}
                                <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                                    <button 
                                        onClick={() => setShowOffline(!showOffline)}
                                        className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-[#c99472] transition-colors inline-flex items-center gap-2"
                                    >
                                        Prefer manual transfer? {showOffline ? <Minus size={14}/> : <Plus size={14}/>}
                                    </button>
                                    
                                    <AnimatePresence>
                                        {showOffline && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden text-left mt-6"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                        <div className="flex items-center gap-3 mb-4 text-[#111827]">
                                                            <Landmark size={20} className="text-[#c99472]" />
                                                            <h4 className="font-serif text-xl">Bank Transfer</h4>
                                                        </div>
                                                        <p className="text-sm text-gray-500 mb-1">First Bank Ghana</p>
                                                        <p className="text-sm text-gray-500 mb-1">FirmLove Foundation</p>
                                                        <p className="text-lg text-[#111827] font-medium tracking-wide">0123 4567 8901</p>
                                                    </div>
                                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                        <div className="flex items-center gap-3 mb-4 text-[#111827]">
                                                            <Smartphone size={20} className="text-[#c99472]" />
                                                            <h4 className="font-serif text-xl">Mobile Money</h4>
                                                        </div>
                                                        <p className="text-sm text-gray-500 mb-1">MTN Mobile Money</p>
                                                        <p className="text-sm text-gray-500 mb-1">FirmLove Foundation</p>
                                                        <p className="text-lg text-[#111827] font-medium tracking-wide">+233 55 287 9130</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        {/* 02. VOLUNTEER SECTION */}
                        <div id="volunteer" className="scroll-mt-40">
                            <div className="mb-12">
                                <span className="text-[#c99472] text-sm font-bold tracking-[0.2em] uppercase mb-4 block md:hidden">02. Volunteer</span>
                                <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mb-6">Give Your Time</h2>
                                <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
                                    Our work relies on passionate individuals willing to put boots on the ground. Join us for our next outreach event.
                                </p>
                            </div>

                            <div className="bg-white p-8 md:p-16 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
                                        <FormInput 
                                            label="Full Name" 
                                            id="vol-name" 
                                            placeholder="Jane Doe"
                                            value={volunteerForm.name} 
                                            onChange={(e: any) => setVolunteerForm({...volunteerForm, name: e.target.value})} 
                                        />
                                        <FormInput 
                                            label="Email Address" 
                                            id="vol-email" 
                                            type="email"
                                            placeholder="jane@example.com"
                                            value={volunteerForm.email} 
                                            onChange={(e: any) => setVolunteerForm({...volunteerForm, email: e.target.value})} 
                                        />
                                    </div>
                                    <div className="relative mb-10 group">
                                        <label htmlFor="vol-interest" className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold group-focus-within:text-[#c99472] transition-colors">
                                            Area of Interest
                                        </label>
                                        <select 
                                            id="vol-interest" 
                                            className="w-full bg-transparent border-b border-gray-300 py-3 text-lg text-gray-900 focus:outline-none focus:border-[#c99472] transition-colors appearance-none cursor-pointer"
                                            value={volunteerForm.interest} 
                                            onChange={(e: any) => setVolunteerForm({...volunteerForm, interest: e.target.value})}
                                        >
                                            <option value="" disabled>Select where you'd like to help...</option>
                                            <option value="education">Education & Tutoring</option>
                                            <option value="health">Healthcare Support</option>
                                            <option value="outreach">Community Outreach</option>
                                            <option value="logistics">Logistics & Admin</option>
                                        </select>
                                    </div>
                                    <FormInput 
                                        label="A brief message" 
                                        id="vol-message" 
                                        type="textarea"
                                        placeholder="Tell us a little about why you'd like to join..."
                                        value={volunteerForm.message} 
                                        onChange={(e: any) => setVolunteerForm({...volunteerForm, message: e.target.value})} 
                                    />
                                    
                                    <div className="mt-12 flex justify-end">
                                        <button type="submit" className="group flex items-center gap-4 text-sm md:text-base uppercase tracking-widest font-bold text-[#111827] hover:text-[#c99472] transition-colors">
                                            Submit Application
                                            <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#c99472] transition-colors">
                                                <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ──────────── FAQ SECTION ──────────── */}
            <section id="faq" className="py-24 md:py-32 bg-[#F3EFEA]">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left: Typography */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-40">
                            <h2 className="text-[clamp(3rem,5vw,4.5rem)] leading-[1.1] font-serif text-[#111827] mb-6">
                                Questions? <br/>
                                We got your <br/>
                                <span className="italic">Answers</span>
                            </h2>
                            <p className="text-gray-600 text-lg md:text-xl font-light">
                                Have questions? We're here to provide clarity and transparency.
                            </p>
                        </div>
                    </div>

                    {/* Right: Accordion Pills */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {faqs.map((faq, idx) => {
                            const isActive = activeFaq === idx
                            return (
                                <div 
                                    key={idx} 
                                    className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm border border-transparent ${isActive ? 'border-[#c99472]/20' : 'hover:border-gray-200'}`}
                                >
                                    <button 
                                        onClick={() => setActiveFaq(isActive ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                    >
                                        <span className={`font-serif text-xl md:text-2xl pr-8 transition-colors ${isActive ? 'text-[#c99472]' : 'text-[#111827]'}`}>
                                            {faq.q}
                                        </span>
                                        <span className={`flex-shrink-0 transition-transform duration-300 ${isActive ? 'rotate-45 text-[#c99472]' : 'text-[#111827]'}`}>
                                            <Plus size={24} strokeWidth={1.5} />
                                        </span>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                <div className="px-6 md:px-8 pb-8 text-gray-600 text-lg font-light leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </div>
    )
}
