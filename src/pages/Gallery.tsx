import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { X } from 'lucide-react'
import { defaultGallery, type GalleryItem } from '../data/siteData'

const categories = ['all', 'events', 'donations', 'outreach'] as const

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState<string>('all')
    const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)

    const filtered = activeFilter === 'all'
        ? defaultGallery
        : defaultGallery.filter(item => item.category === activeFilter)

    return (
        <>
            <Helmet>
                <title>Gallery — FirmLove Foundation</title>
                <meta name="description" content="Browse photos from FirmLove Foundation's events, donation drives, and community outreach programs." />
            </Helmet>

            <section className="page-hero bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80')] bg-cover bg-center">
                <div className="page-hero-overlay" />
                <div className="max-w-container mx-auto px-6 page-hero-content">
                    <span className="section-label">Our Moments</span>
                    <h1>Photo Gallery</h1>
                    <p>Capturing the moments that define our impact.</p>
                </div>
            </section>

            <section className="py-24 bg-gray-50">
                <div className="max-w-container mx-auto px-6">
                    {/* Filter tabs */}
                    <div className="flex justify-center gap-3 mb-12 flex-wrap">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${activeFilter === cat
                                    ? 'bg-primary text-white shadow-[0_4px_14px_rgba(220,38,38,0.35)]'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary'
                                    }`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map(item => (
                            <div
                                key={item.id}
                                className="relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] group"
                                onClick={() => setLightboxItem(item)}
                            >
                                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-5 opacity-0 group-hover:opacity-100">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-primary-50 text-primary">{item.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxItem && (
                <div className="fixed inset-0 bg-black/90 z-[2000] flex items-center justify-center p-6" onClick={() => setLightboxItem(null)}>
                    <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors" onClick={() => setLightboxItem(null)}>
                        <X size={28} />
                    </button>
                    <div className="max-w-4xl max-h-[85vh]" onClick={e => e.stopPropagation()}>
                        <img src={lightboxItem.src.replace('w=600', 'w=1200')} alt={lightboxItem.alt} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
                        <p className="text-white/80 text-center mt-4 text-sm">{lightboxItem.alt}</p>
                    </div>
                </div>
            )}
        </>
    )
}
