import { Helmet } from 'react-helmet-async'
import { ArrowRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { defaultPosts } from '../data/siteData'
import Hero from '../components/Hero'
import ImpactStats from '../components/ImpactStats'
import OurApproach from '../components/OurApproach'
import ClimaxCTA from '../components/ClimaxCTA'


export default function Home() {
    const recentPosts = defaultPosts.slice(0, 3)

    return (
        <>
            <Helmet>
                <title>FirmLove Foundation — Spreading Love, Bringing Hope</title>
                <meta name="description" content="FirmLove Foundation is a beacon of hope, dedicated to restoring dignity to the marginalized by providing essential humanitarian aid and educational opportunities." />
            </Helmet>

            {/* Hero & Impact Bridge */}
            <Hero />
            <ImpactStats />

            {/* Our Approach */}
            <OurApproach />


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

            {/* Climax CTA */}
            <ClimaxCTA />
        </>
    )
}
