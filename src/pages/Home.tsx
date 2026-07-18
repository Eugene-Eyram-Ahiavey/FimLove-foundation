import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Heart, Globe, TrendingUp } from 'lucide-react'
import { defaultPosts } from '../data/siteData'
import upcomingProgram from "../assets/images/donation.jpeg"

const stats = [
    { icon: <Users size={28} />, value: '15,000+', label: 'Lives Impacted' },
    { icon: <Heart size={28} />, value: '50+', label: 'Programs Completed' },
    { icon: <Globe size={28} />, value: '25+', label: 'Communities Served' },
    { icon: <TrendingUp size={28} />, value: '$500K+', label: 'Funds Raised' },
]

export default function Home() {
    const recentPosts = defaultPosts.slice(0, 3)

    return (
        <>
            <Helmet>
                <title>FirmLove Foundation — Compassion in Action</title>
                <meta name="description" content="FirmLove Foundation is dedicated to transforming lives through education, health, and community development programs. Join us in making a difference." />
            </Helmet>

            {/* Hero */}
            <section className="relative min-h-screen flex items-center bg-[#1a0a0a] overflow-hidden">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay pointer-events-none"
                    src="https://cdn.pixabay.com/video/2021/08/25/86241-592881856_large.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a]/90 via-[#2d1010]/80 to-[#3d1515]/70" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(220,38,38,0.2)_0%,transparent_60%)]" />
                
                <div className="relative z-[2] max-w-container mx-auto px-6 py-32 pb-24 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Left Column - Text Content */}
                        <div className="max-w-[750px]">
                            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-2 rounded-full text-sm text-white/90 mb-8 opacity-0 animate-fade-in-up">
                                🤝 Together We Make a Difference
                            </span>
                            <h1 className="text-white text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.1] mb-8 opacity-0 animate-fade-in-up delay-1">
                                Empowering Communities,<br />
                                <span className="bg-gradient-to-br from-primary-400 to-primary-300 bg-clip-text text-transparent">Transforming Lives</span>
                            </h1>
                            <p className="text-white/80 text-lg max-w-[560px] leading-7 mb-10 opacity-0 animate-fade-in-up delay-2">
                                FirmLove Foundation is committed to creating lasting change through
                                education, healthcare, and sustainable development in underserved communities.
                            </p>
                            <div className="flex gap-4 flex-wrap opacity-0 animate-fade-in-up delay-3">
                                <Link to="/donate" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-lg bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)] hover:bg-primary-700 hover:-translate-y-0.5 transition-all duration-250">
                                    Donate Now <Heart size={18} />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full font-semibold text-lg bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-250">
                                    Learn More <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Floating Banner */}
                        <div className="relative w-full max-w-[460px] mx-auto lg:ml-auto opacity-0 animate-fade-in-up delay-4">
                            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full transform -translate-y-4"></div>
                            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-2.5 rounded-[2rem] shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                                <div className="absolute top-6 left-6 z-10 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-[0_4px_14px_rgba(220,38,38,0.35)] animate-pulse">
                                    Upcoming Program
                                </div>
                                <img 
                                    src={upcomingProgram} 
                                    alt="Program Flyer Placeholder" 
                                    className="w-full h-auto aspect-[4/5] object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-[2rem] flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-2xl font-bold mb-2">Annual Charity Drive</h3>
                                    <p className="text-white/80 mb-6 line-clamp-2">Join us in providing essential supplies and medical care to rural communities.</p>
                                    <Link to="/programs" className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-[0.95rem] bg-primary text-white shadow-md hover:bg-primary-600 transition-colors">
                                        View Details <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-[-1px] left-0 right-0 z-[2]">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

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
                            <h2 className="mb-6">A Foundation Built on Love &amp; Action</h2>
                            <p className="mb-4 text-[1.05rem]">
                                Since our founding, FirmLove has been driven by the belief that every person
                                deserves access to education, healthcare, and opportunity. We work directly
                                with communities to understand their needs and deliver programs that create
                                real, measurable impact.
                            </p>
                            <p className="mb-4 text-[1.05rem]">
                                Our approach combines grassroots engagement with strategic partnerships to
                                ensure sustainability and scalability. Every donation, every volunteer hour,
                                and every partnership brings us closer to a world where no one is left behind.
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
