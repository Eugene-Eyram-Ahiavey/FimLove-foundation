import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import heroImg from '../assets/images/firmlove-images/allsaints11.jpg'

// Import all real images for the gallery
import imgRoyal1 from '../assets/images/firmlove-images/royalseed-1.jpg'
import imgRoyal2 from '../assets/images/firmlove-images/royalseed-2.jpg'
import imgRoyal19 from '../assets/images/firmlove-images/roayalseed19.jpg'
import imgRoyal20 from '../assets/images/firmlove-images/royalseed20.jpg'

import imgSaints1 from '../assets/images/firmlove-images/allsaints1.jpg'
import imgSaints2 from '../assets/images/firmlove-images/allsaints2.jpg'
import imgSaints3 from '../assets/images/firmlove-images/allsaints3.jpg'

import imgKorle1 from '../assets/images/firmlove-images/korlebu-1.jpg'
import imgKorle3 from '../assets/images/firmlove-images/korlebu3.jpg'

import imgAda1 from '../assets/images/firmlove-images/Ada1.jpg'
import imgAda3 from '../assets/images/firmlove-images/Ada3.jpg'

import imgPrison1 from '../assets/images/firmlove-images/james-camp-prison1.jpg'

import imgWidows1 from '../assets/images/firmlove-images/widows-1.jpg'
import imgWidows2 from '../assets/images/firmlove-images/widows-2.jpg'

type OutreachCategory = 'All' | 'Royal Seed Home' | 'All Saints School' | 'Korle Bu' | 'Ada Outreach' | 'James Camp Prison' | 'Widows Outreach'

const categories: OutreachCategory[] = [
    'All', 'Royal Seed Home', 'All Saints School', 'Korle Bu', 'Ada Outreach', 'James Camp Prison', 'Widows Outreach'
]

interface GalleryPhoto {
    id: string
    src: string
    alt: string
    category: OutreachCategory
    date?: string
}

const photos: GalleryPhoto[] = [
    { id: '1', src: imgRoyal1, alt: 'Volunteers and children gathered', category: 'Royal Seed Home', date: 'Ongoing' },
    { id: '2', src: imgSaints1, alt: 'Students engaging in career guidance', category: 'All Saints School', date: 'October 2025' },
    { id: '3', src: imgKorle3, alt: 'Medical supplies donation at pediatric ward', category: 'Korle Bu', date: 'November 2025' },
    { id: '4', src: imgAda1, alt: 'Festive outreach and food distribution', category: 'Ada Outreach', date: 'December 2025' },
    { id: '5', src: imgWidows1, alt: 'Sprinkles of Love Widows Outreach', category: 'Widows Outreach', date: 'December 2025' },
    { id: '6', src: imgRoyal2, alt: 'Donations distributed at the home', category: 'Royal Seed Home', date: 'Ongoing' },
    { id: '7', src: imgSaints2, alt: 'Educational support at All Saints', category: 'All Saints School', date: 'October 2025' },
    { id: '8', src: imgPrison1, alt: 'Support at James Camp Prison', category: 'James Camp Prison', date: 'Ongoing' },
    { id: '9', src: imgKorle1, alt: 'Team members at Korle Bu', category: 'Korle Bu', date: 'November 2025' },
    { id: '10', src: imgRoyal19, alt: 'Children smiling and playing', category: 'Royal Seed Home', date: 'Ongoing' },
    { id: '11', src: imgAda3, alt: 'Community gathering at Ada', category: 'Ada Outreach', date: 'December 2025' },
    { id: '12', src: imgWidows2, alt: 'Celebrating with Widows and children', category: 'Widows Outreach', date: 'December 2025' },
    { id: '13', src: imgRoyal20, alt: 'Group photo at Royal Seed Home', category: 'Royal Seed Home', date: 'Ongoing' },
    { id: '14', src: imgSaints3, alt: 'School supplies distributed', category: 'All Saints School', date: 'October 2025' },
]

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState<OutreachCategory>('All')
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const filteredPhotos = useMemo(() => {
        return activeFilter === 'All' 
            ? photos 
            : photos.filter(p => p.category === activeFilter)
    }, [activeFilter])

    // For lightbox navigation
    const openLightbox = (index: number) => {
        setLightboxIndex(index)
        document.body.style.overflow = 'hidden' // Prevent scrolling behind lightbox
    }
    const closeLightbox = () => {
        setLightboxIndex(null)
        document.body.style.overflow = 'unset'
    }
    const nextPhoto = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % filteredPhotos.length : null)
    const prevPhoto = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null)

    return (
        <>
            <Helmet>
                <title>Gallery — FirmLove Foundation</title>
                <meta name="description" content="Browse photos from FirmLove Foundation's events, donation drives, and community outreach programs."/>
            </Helmet>

            {/* The Editorial Hero */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#FDFBF7]">
                <div className="max-w-[1400px] mx-auto px-6">
                    {/* Typography Focus */}
                    <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                        <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-[#c99472] mb-6 block">Our Visual Journey</span>
                        <h1 className="text-[clamp(3.5rem,6vw,7rem)] leading-[1.05] font-serif text-[#111827] tracking-tight mb-8">
                            Moments of <span className="italic text-[#c99472] font-light block md:inline">Impact</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl font-light leading-[1.8] max-w-2xl mx-auto">
                            Beyond numbers and statistics, our mission is defined by the smiles we share and the hands we hold. These are the stories of our community.
                        </p>
                    </div>

                    {/* Sprawling Anchor Image */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                            src={heroImg} 
                            alt="FirmLove Community" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="pb-32 bg-[#FDFBF7] min-h-screen">
                <div className="max-w-[1400px] mx-auto px-6">
                    
                    {/* Sticky Bold Typography Filter Menu */}
                    <div className="sticky top-[80px] z-40 bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-gray-200/50 mb-16 py-6 px-6 -mx-6 md:px-0 md:mx-0">
                        <div className="flex items-center gap-8 md:gap-12 overflow-x-auto hide-scrollbar pb-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`whitespace-nowrap text-lg md:text-2xl font-serif transition-colors duration-300 ${
                                        activeFilter === cat 
                                            ? 'text-[#c99472] font-semibold tracking-tight' 
                                            : 'text-gray-400 hover:text-gray-800 font-light'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* The Asymmetric Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        <AnimatePresence mode="popLayout">
                            {filteredPhotos.map((photo, idx) => (
                                <motion.div
                                    key={photo.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="break-inside-avoid cursor-zoom-in group relative rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                    onClick={() => openLightbox(idx)}
                                >
                                    <img 
                                        src={photo.src} 
                                        alt={photo.alt}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                                    />
                                    {/* Delicate hover gradient for desktop */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[#3a271d]/10 transition-colors duration-500 pointer-events-none" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            {/* The Narrative Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-[#2a1b13]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button 
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="absolute top-6 right-6 text-white/50 hover:text-[#c99472] transition-colors z-50 p-2"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>

                        <div 
                            className="relative w-full max-w-7xl flex flex-col md:flex-row items-center gap-8 h-full"
                            onClick={(e) => e.stopPropagation()} // Prevent clicking inner content from closing lightbox
                        >
                            
                            {/* Navigation Prev */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); prevPhoto(); }} 
                                className="hidden md:flex text-white/30 hover:text-[#c99472] transition-colors p-4"
                            >
                                <ChevronLeft size={48} strokeWidth={1} />
                            </button>

                            {/* Image Container */}
                            <div className="flex-1 w-full h-[60vh] md:h-[80vh] flex items-center justify-center relative">
                                <motion.img 
                                    key={filteredPhotos[lightboxIndex].id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    src={filteredPhotos[lightboxIndex].src} 
                                    alt={filteredPhotos[lightboxIndex].alt} 
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
                                />
                                
                                {/* Mobile Navigation overlay */}
                                <div className="absolute inset-0 flex items-center justify-between md:hidden px-2 pointer-events-none">
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); prevPhoto(); }} 
                                        className="text-white/70 pointer-events-auto p-2 backdrop-blur-md rounded-full bg-black/40 hover:bg-[#c99472]"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); nextPhoto(); }} 
                                        className="text-white/70 pointer-events-auto p-2 backdrop-blur-md rounded-full bg-black/40 hover:bg-[#c99472]"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Narrative Context */}
                            <div className="w-full md:w-80 text-left md:h-[80vh] flex flex-col justify-end pb-8 md:pb-12 px-4 md:px-0">
                                <motion.div
                                    key={`text-${filteredPhotos[lightboxIndex].id}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <p className="text-[#c99472] font-serif italic text-2xl mb-2">
                                        {filteredPhotos[lightboxIndex].category}
                                    </p>
                                    <h3 className="text-white text-lg md:text-xl font-light mb-4 leading-snug">
                                        {filteredPhotos[lightboxIndex].alt}
                                    </h3>
                                    {filteredPhotos[lightboxIndex].date && (
                                        <p className="text-white/40 text-sm tracking-widest uppercase">
                                            {filteredPhotos[lightboxIndex].date}
                                        </p>
                                    )}
                                </motion.div>
                            </div>

                            {/* Navigation Next */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); nextPhoto(); }} 
                                className="hidden md:flex text-white/30 hover:text-[#c99472] transition-colors p-4"
                            >
                                <ChevronRight size={48} strokeWidth={1} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
