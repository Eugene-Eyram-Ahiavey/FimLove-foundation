import { Helmet } from 'react-helmet-async'
import { defaultPosts } from '../data/siteData'

export default function News() {
    return (
        <>
            <Helmet>
                <title>News & Updates — FirmLove Foundation</title>
                <meta name="description" content="Stay updated with the latest news, events, and stories from FirmLove Foundation's community impact work." />
            </Helmet>

            <section className="page-hero bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=1600&q=80')] bg-cover bg-center">
                <div className="page-hero-overlay" />
                <div className="max-w-container mx-auto px-6 page-hero-content">
                    <span className="section-label">Stay Informed</span>
                    <h1>News & Updates</h1>
                    <p>The latest stories, events, and milestones from our community impact work.</p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {defaultPosts.map(post => (
                            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-250 hover:shadow-lg hover:-translate-y-1 group">
                                <div className="relative h-60 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <span className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-primary-50 text-primary">{post.category}</span>
                                </div>
                                <div className="p-6">
                                    <time className="text-xs text-gray-400 uppercase tracking-wide">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'long', day: 'numeric', year: 'numeric'
                                        })}
                                    </time>
                                    <h3 className="text-lg mt-2 mb-2">{post.title}</h3>
                                    <p className="text-sm leading-relaxed mb-3">{post.excerpt}</p>
                                    <div className="text-sm text-gray-600 leading-relaxed">
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
