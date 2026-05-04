import { Helmet } from 'react-helmet-async'
import { defaultPrograms } from '../data/siteData'

export default function Programs() {
    const ongoing = defaultPrograms.filter(p => p.status === 'ongoing')
    const completed = defaultPrograms.filter(p => p.status === 'completed')

    const ProgramCard = ({ program, badge, badgeClass }: { program: typeof defaultPrograms[0], badge: string, badgeClass: string }) => (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-250 hover:shadow-lg hover:-translate-y-1 group">
            <div className="relative h-52 overflow-hidden">
                <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className={`absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${badgeClass}`}>{badge}</span>
            </div>
            <div className="p-6">
                <h3 className="text-lg mb-2">{program.title}</h3>
                <p className="text-sm leading-relaxed mb-4">{program.description}</p>
                <div className="text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg">
                    <strong className="text-gray-900">Impact:</strong> {program.impact}
                </div>
            </div>
        </div>
    )

    return (
        <>
            <Helmet>
                <title>Our Programs — FirmLove Foundation</title>
                <meta name="description" content="Explore FirmLove Foundation's ongoing and completed programs in education, health, water, and community development." />
            </Helmet>

            <section className="page-hero bg-[url('https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=1600&q=80')] bg-cover bg-center">
                <div className="page-hero-overlay" />
                <div className="max-w-container mx-auto px-6 page-hero-content">
                    <span className="section-label">What We Do</span>
                    <h1>Our Programs</h1>
                    <p>Creating real, measurable impact through targeted community programs.</p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="section-label">Active Initiatives</span>
                        <h2 className="mb-4">Ongoing Programs</h2>
                        <p className="max-w-[600px] mx-auto text-lg">Programs currently in progress, making a difference in communities around the world.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ongoing.map(program => (
                            <ProgramCard key={program.id} program={program} badge="Ongoing" badgeClass="bg-emerald-50 text-emerald-600" />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="section-label">Completed Work</span>
                        <h2 className="mb-4">Past Programs</h2>
                        <p className="max-w-[600px] mx-auto text-lg">Programs we've successfully completed, leaving lasting impact in communities.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {completed.map(program => (
                            <ProgramCard key={program.id} program={program} badge="Completed" badgeClass="bg-gray-100 text-gray-600" />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
