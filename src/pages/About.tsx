import { Helmet } from 'react-helmet-async'
import { Eye, Target, Heart, Quote } from 'lucide-react'
import founderImage from "../assets/images/Dr-Hafisah.jpg"


export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us — FirmLove Foundation</title>
                <meta name="description" content="Learn about FirmLove Foundation's story, mission, vision, and the team behind our community impact programs." />
            </Helmet>

            {/* Page Hero */}
            <section className="page-hero bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80')] bg-cover bg-center">
                <div className="page-hero-overlay" />
                <div className="max-w-container mx-auto px-6 page-hero-content">
                    <span className="section-label">Our Story</span>
                    <h1>About FirmLove</h1>
                    <p>Building stronger communities through compassion, transparency, and action since day one.</p>
                </div>
            </section>

            {/* Story */}
            <section className="py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="section-label">Our Journey</span>
                            <h2 className="mb-6">The Story Behind FirmLove</h2>
                            <p className="mb-4 text-[1.05rem]">
                                Firmlove Foundation is a beacon of hope in a world often shadowed by hardship and indifference. We believe that even when darkness seems to rise, the power of love must remain unyielding. Our foundation exists for one simple yet profound reason: <strong>to show love through action</strong>.
                            </p>
                            <p className="mb-4 text-[1.05rem]">
                                Inspired by the mandate in <strong>Matthew 25:35–36</strong>, we recognize that our faith and humanity are best expressed through service. When we feed the hungry, clothe the naked, visit the sick, and support the imprisoned, we are not just providing aid—we are restoring dignity.
                            </p>
                            <p className="text-[1.05rem]">
                                What began as a response to the immediate needs of the marginalized in Ghana has grown into a lifelong journey of compassion. Whether we are supporting less privileged teenagers with their education or providing a meal to a wanderer, our goal is to ensure that no one feels forgotten. At Firmlove, we don't just speak about empathy; we live it, striving every day to be the hands and feet of love in our communities and beyond.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=700&q=80"
                                alt="FirmLove team working in community"
                                className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Eye size={32} />, title: 'Our Vision', text: 'Our vision is a world transformed by compassion, where unyielding love prevails over indifference—starting within Ghana and extending across borders to uplift humanity.' },
                            { icon: <Target size={32} />, title: 'Our Mission', text: 'To restore dignity to the marginalized by providing essential humanitarian aid and compassionate care, while empowering the less privileged through transformative educational opportunities.' },
                            { icon: <Heart size={32} />, title: 'Our Values', text: 'Compassion guides our work. Integrity defines our processes. Collaboration amplifies our impact. Innovation drives our solutions. Sustainability ensures our legacy.' },
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-10 rounded-xl border border-gray-200 text-center transition-all duration-250 hover:shadow-lg hover:-translate-y-1">
                                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary mx-auto mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="mb-3">{card.title}</h3>
                                <p className="text-[0.95rem]">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-16 items-center">
                        <div>
                            <img
                                src={founderImage}
                                alt="FirmLove Founder"
                                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
                            />
                        </div>
                        <div>
                            <div className="text-primary-200 mb-4">
                                <Quote size={40} />
                            </div>
                            <h2 className="mb-6">Founder's Message</h2>
                            <blockquote className="text-lg text-gray-600 leading-8 italic border-l-4 border-primary pl-6 mb-6">
                                "What began as a response to the immediate needs of the marginalized in Ghana has grown into a lifelong journey of compassion. Whether we are supporting less privileged teenagers with their education or providing a meal to a wanderer, our goal is to ensure that no one feels forgotten. I invite you to join us on this journey."
                            </blockquote>
                            <div>
                                <strong className="text-gray-900 block">Dr. Hafisah Quansah</strong>
                                <span className="text-gray-500 text-sm">Founder & Executive Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transparency */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="section-label">Accountability</span>
                        <h2 className="mb-4">Transparency & Credibility</h2>
                        <p className="max-w-[600px] mx-auto text-lg">We believe in full transparency. Every donation is tracked, every program is audited, and every result is shared.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Audited Finances', text: 'Our financial records are independently audited annually and published for public review.' },
                            { title: 'Impact Reports', text: 'Quarterly impact reports document every program\'s outcomes, challenges, and learnings.' },
                            { title: 'Verified Partners', text: 'We partner with accredited organizations and government bodies to ensure program quality.' },
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 transition-all duration-250 hover:shadow-lg hover:-translate-y-1">
                                <h4 className="text-lg font-semibold mb-3">{card.title}</h4>
                                <p className="text-[0.95rem]">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
