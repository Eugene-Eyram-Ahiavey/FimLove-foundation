import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Heart, Globe, TrendingUp } from 'lucide-react'
import { defaultPosts } from '../data/siteData'
import Hero from '../components/Hero'

const stats = [
    { icon: <Heart size={28} />, value: '4', label: 'Core Program Areas' },
    { icon: <Users size={28} />, value: '500+', label: 'Children Supported' },
    { icon: <Globe size={28} />, value: '3+', label: 'Communities Reached' },
    { icon: <TrendingUp size={28} />, value: '100%', label: 'Commitment to Service' },
]

export default function Home() {
    const recentPosts = defaultPosts.slice(0, 3)

    return (
        <>
            <Helmet>
                <title>FirmLove Foundation — Spreading Love, Bringing Hope</title>
                <meta name="description" content="FirmLove Foundation is a beacon of hope, dedicated to restoring dignity to the marginalized by providing essential humanitarian aid and educational opportunities." />
            </Helmet>

            {/* Hero */}
            <Hero />

            {/* Introduction */}
            <section className="py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80"
                                alt="FirmLove community outreach"
                                className="rounded-2xl w-full h-[480px] object-cover shadow-xl max-md:h-80"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-5 rounded-xl text-center shadow-lg max-md:-bottom-4 max-md:right-4">
                                <span className="block font-heading text-3xl font-extrabold leading-none">10+</span>
                                <span className="text-xs opacity-90">Years of Impact</span>
                            </div>
                        </div>
                        <div>
                            <span className="section-label">Who We Are</span>
                            <h2 className="mb-6">To Show Love Through Action</h2>
                            <p className="mb-4 text-[1.05rem]">
                                Firmlove Foundation is a beacon of hope in a world often shadowed by hardship and indifference. We believe that even when darkness seems to rise, the power of love must remain unyielding. Our foundation exists for one simple yet profound reason: to show love through action.
                            </p>
                            <p className="mb-4 text-[1.05rem]">
                                Inspired by the mandate in <strong>Matthew 25:35–36</strong>, we recognize that our faith and humanity are best expressed through service. Whether we are supporting less privileged teenagers with their education or providing a meal to a wanderer, our goal is to ensure that no one feels forgotten.
                            </p>
                            <Link to="/about" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-[0.95rem] border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-250 mt-4">
                                Our Story <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary py-16">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center text-white">
                                <div className="mb-2 opacity-80">{stat.icon}</div>
                                <div className="font-heading text-4xl font-extrabold leading-tight">{stat.value}</div>
                                <div className="text-sm opacity-85 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Updates */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="section-label">Latest News</span>
                        <h2 className="mb-4">Recent Updates</h2>
                        <p className="max-w-[600px] mx-auto text-lg">Stay informed about our latest activities, events, and the impact we're making together.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recentPosts.map(post => (
                            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-250 hover:shadow-lg hover:-translate-y-1 group">
                                <div className="relative h-56 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-primary-50 text-primary">{post.category}</span>
                                </div>
                                <div className="p-6">
                                    <time className="text-xs text-gray-400 uppercase tracking-wide">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                    <h3 className="text-lg mt-2 mb-2 leading-snug">{post.title}</h3>
                                    <p className="text-sm leading-relaxed">{post.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/news" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-semibold text-[0.95rem] border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-250">
                            View All Updates <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-gray-900 to-[#1a1a2e] py-24">
                <div className="max-w-container mx-auto px-6 text-center max-w-[650px]">
                    <h2 className="text-white mb-4">Ready to Make a Difference?</h2>
                    <p className="text-gray-400 text-lg mb-10">Join thousands of supporters who are helping us create lasting change in communities around the world.</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link to="/donate" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-lg bg-white text-primary shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-250">
                            Donate Now <Heart size={18} />
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-lg border-2 border-white/30 text-white bg-transparent hover:bg-white hover:text-gray-900 hover:border-white hover:-translate-y-0.5 transition-all duration-250">
                            Get In Touch <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
