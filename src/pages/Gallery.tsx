import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion'
import ClimaxCTA from '../components/ClimaxCTA'

import heroImg from '../assets/images/firmlove-images/allsaints11.jpg'

// ── Royal Seed Home ──
import imgRoyal1 from '../assets/images/firmlove-images/royalseed-1.jpg'
import imgRoyal2 from '../assets/images/firmlove-images/royalseed-2.jpg'
import imgRoyal18 from '../assets/images/firmlove-images/royalseed18.jpg'
import imgRoyal19 from '../assets/images/firmlove-images/roayalseed19.jpg'
import imgRoyal20 from '../assets/images/firmlove-images/royalseed20.jpg'

// ── All Saints School ──
import imgSaints1 from '../assets/images/firmlove-images/allsaints1.jpg'
import imgSaints2 from '../assets/images/firmlove-images/allsaints2.jpg'
import imgSaints3 from '../assets/images/firmlove-images/allsaints3.jpg'
import imgSaints4 from '../assets/images/firmlove-images/allsaints4.jpg'
import imgSaints5 from '../assets/images/firmlove-images/allsaints5.jpg'
import imgSaints6 from '../assets/images/firmlove-images/allsaints6.jpg'
import imgSaints7 from '../assets/images/firmlove-images/allsaints7.jpg'
import imgSaints8 from '../assets/images/firmlove-images/allsaints8.jpg'
import imgSaints9 from '../assets/images/firmlove-images/allsaints9.jpg'
import imgSaints10 from '../assets/images/firmlove-images/allsaints10.jpg'
import imgSaints12 from '../assets/images/firmlove-images/allsaints12.jpg'
import imgSaints13 from '../assets/images/firmlove-images/allsaints13.jpg'
import imgSaints14 from '../assets/images/firmlove-images/allsaints14.jpg'
import imgSaints15 from '../assets/images/firmlove-images/allsaints15.jpg'
import imgSaints16 from '../assets/images/firmlove-images/allsaints16.jpg'
import imgSaints17 from '../assets/images/firmlove-images/allsaints17.jpg'
import imgSaints18 from '../assets/images/firmlove-images/allsaints18.jpg'
import imgSaints19 from '../assets/images/firmlove-images/allsaints19.jpg'

// ── Korle Bu ──
import imgKorle1 from '../assets/images/firmlove-images/korlebu-1.jpg'
import imgKorle2 from '../assets/images/firmlove-images/korlebu-2.jpg'
import imgKorle3 from '../assets/images/firmlove-images/korlebu3.jpg'
import imgKorle3b from '../assets/images/firmlove-images/korlebu-3.jpg'
import imgKorle5 from '../assets/images/firmlove-images/korlebu-5.jpg'
import imgKorle6 from '../assets/images/firmlove-images/korlebu-6.jpg'

// ── Ada Outreach ──
import imgAda1 from '../assets/images/firmlove-images/Ada1.jpg'
import imgAda2 from '../assets/images/firmlove-images/Ada2.jpg'
import imgAda3 from '../assets/images/firmlove-images/Ada3.jpg'
import imgPuteAda from '../assets/images/firmlove-images/pute-ada.jpg'

// ── James Camp Prison ──
import imgPrison1 from '../assets/images/firmlove-images/james-camp-prison1.jpg'
import imgPrison2 from '../assets/images/firmlove-images/james-camp-prsoin2.jpg'
import imgPrison3 from '../assets/images/firmlove-images/james-camp-prison3.jpg'

// ── Widows Outreach ──
import imgWidows1 from '../assets/images/firmlove-images/widows-1.jpg'
import imgWidows2 from '../assets/images/firmlove-images/widows-2.jpg'

// ── Group / Team ──
import imgGroup1 from '../assets/images/firmlove-images/group1.jpg'
import imgGroup2 from '../assets/images/firmlove-images/group2.jpg'
import imgGroup3 from '../assets/images/firmlove-images/group3.jpg'
import imgGroup4 from '../assets/images/firmlove-images/group4.jpg'
import imgGroup5 from '../assets/images/firmlove-images/group-5.jpg'
import imgGroup6 from '../assets/images/firmlove-images/group6.jpg'


// ───────────────────────────── Types & Data ─────────────────────────────

type OutreachCategory =
    | 'All'
    | 'Royal Seed Home'
    | 'All Saints School'
    | 'Korle Bu'
    | 'Ada Outreach'
    | 'James Camp Prison'
    | 'Widows Outreach'

const categories: OutreachCategory[] = [
    'All',
    'Royal Seed Home',
    'All Saints School',
    'Korle Bu',
    'Ada Outreach',
    'James Camp Prison',
    'Widows Outreach',
]

interface GalleryPhoto {
    id: string
    src: string
    alt: string
    category: Exclude<OutreachCategory, 'All'>
}

const photos: GalleryPhoto[] = [
    // 1
    { id: 's1',  src: imgSaints1,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 'r1',  src: imgRoyal1,   alt: 'Royal Seed Home Donation',         category: 'Royal Seed Home' },
    { id: 'k1',  src: imgKorle1,   alt: 'Korle Bu Pediatric Ward',          category: 'Korle Bu' },
    { id: 'a1',  src: imgAda1,     alt: 'Ada East Outreach',                category: 'Ada Outreach' },
    // 2
    { id: 's2',  src: imgSaints2,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 'w1',  src: imgWidows1,  alt: 'Sprinkles of Love Widows',         category: 'Widows Outreach' },
    { id: 'r2',  src: imgRoyal2,   alt: 'Royal Seed Home Donation',         category: 'Royal Seed Home' },
    { id: 'k2',  src: imgKorle2,   alt: 'Korle Bu Pediatric Ward',          category: 'Korle Bu' },
    // 3
    { id: 's3',  src: imgSaints3,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 'a2',  src: imgAda2,     alt: 'Ada East Outreach',                category: 'Ada Outreach' },
    { id: 'p1',  src: imgPrison1,  alt: 'James Camp Prison Visit',          category: 'James Camp Prison' },
    { id: 's4',  src: imgSaints4,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    // 4
    { id: 'r18', src: imgRoyal18,  alt: 'Royal Seed Home Donation',         category: 'Royal Seed Home' },
    { id: 's5',  src: imgSaints5,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 'k3',  src: imgKorle3,   alt: 'Korle Bu Pediatric Ward',          category: 'Korle Bu' },
    { id: 's6',  src: imgSaints6,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    // 5
    { id: 'a3',  src: imgAda3,     alt: 'Ada East Outreach',                category: 'Ada Outreach' },
    { id: 's7',  src: imgSaints7,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 'r19', src: imgRoyal19,  alt: 'Royal Seed Home Donation',         category: 'Royal Seed Home' },
    { id: 's8',  src: imgSaints8,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    // 6
    { id: 'k5',  src: imgKorle5,   alt: 'Korle Bu Pediatric Ward',          category: 'Korle Bu' },
    { id: 's9',  src: imgSaints9,  alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 'w2',  src: imgWidows2,  alt: 'Sprinkles of Love Widows',         category: 'Widows Outreach' },
    { id: 's10', src: imgSaints10, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    // 7
    { id: 'ap',  src: imgPuteAda,  alt: 'Ada East Outreach',                category: 'Ada Outreach' },
    { id: 's12', src: imgSaints12, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 'r20', src: imgRoyal20,  alt: 'Royal Seed Home Donation',         category: 'Royal Seed Home' },
    { id: 's13', src: imgSaints13, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    // 8
    { id: 'k6',  src: imgKorle6,   alt: 'Korle Bu Pediatric Ward',          category: 'Korle Bu' },
    { id: 's14', src: imgSaints14, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 's15', src: imgSaints15, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 's16', src: imgSaints16, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 's17', src: imgSaints17, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 's18', src: imgSaints18, alt: 'All Saints School Outreach',       category: 'All Saints School' },
    { id: 's19', src: imgSaints19, alt: 'All Saints School Outreach',       category: 'All Saints School' },
]


// ───────────────────────── Scroll‑reveal wrapper ─────────────────────────

function RevealImage({ photo, onClick }: { photo: GalleryPhoto; onClick: () => void }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-40px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="break-inside-avoid cursor-zoom-in group relative overflow-hidden mb-2"
            onClick={onClick}
        >
            <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-auto block transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
            {/* Subtle warm overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b13]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {/* Category label that appears on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none">
                <span className="text-white/90 text-sm md:text-base font-serif italic tracking-wide">
                    {photo.category}
                </span>
            </div>
        </motion.div>
    )
}


// ─────────────────────────── Main Component ──────────────────────────────

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState<OutreachCategory>('All')
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    // Hero parallax
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })
    const heroY = useTransform(heroProgress, [0, 1], ['0%', '30%'])

    const filteredPhotos = useMemo(() => {
        return activeFilter === 'All'
            ? photos
            : photos.filter((p) => p.category === activeFilter)
    }, [activeFilter])

    // Lightbox controls
    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index)
        document.body.style.overflow = 'hidden'
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null)
        document.body.style.overflow = 'unset'
    }, [])

    const nextPhoto = useCallback(
        () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredPhotos.length : null)),
        [filteredPhotos.length],
    )
    const prevPhoto = useCallback(
        () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null)),
        [filteredPhotos.length],
    )

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (lightboxIndex === null) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') nextPhoto()
            if (e.key === 'ArrowLeft') prevPhoto()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto])

    return (
        <>
            <Helmet>
                <title>Gallery — FirmLove Foundation</title>
                <meta
                    name="description"
                    content="Browse photos from FirmLove Foundation's outreach to Royal Seed Home, All Saints School, Korle Bu, and more."
                />
            </Helmet>

            {/* ──────────── Editorial Hero with Parallax ──────────── */}
            <section ref={heroRef} className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#FDFBF7] overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">
                    {/* Typography */}
                    <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                        <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-[#c99472] mb-6 block">
                            Our Visual Journey
                        </span>
                        <h1 className="text-[clamp(3.5rem,6vw,7rem)] leading-[1.05] font-serif text-[#111827] tracking-tight mb-8">
                            Moments of{' '}
                            <span className="italic text-[#c99472] font-light block md:inline">Impact</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl font-light leading-[1.8] max-w-2xl mx-auto">
                            Beyond numbers and statistics, our mission is defined by the smiles we share and the hands
                            we hold. These are the stories of our community.
                        </p>
                    </div>

                    {/* Parallax Anchor Image */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                        <motion.img
                            src={heroImg}
                            alt="FirmLove Community"
                            style={{ y: heroY }}
                            className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
                        />
                    </div>
                </div>
            </section>

            {/* ──────────── Filter + Grid ──────────── */}
            <section className="pb-32 bg-[#FDFBF7]">
                <div className="max-w-[1400px] mx-auto">
                    {/* Sticky Typography Filter */}
                    <div className="sticky top-[80px] z-40 bg-[#FDFBF7]/90 backdrop-blur-xl border-b border-gray-200/50 py-5 px-6">
                        <div className="flex items-center gap-6 md:gap-10 overflow-x-auto hide-scrollbar pb-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`whitespace-nowrap text-base md:text-xl font-serif transition-all duration-300 relative pb-1 ${
                                        activeFilter === cat
                                            ? 'text-[#c99472]'
                                            : 'text-gray-400 hover:text-[#3a271d]'
                                    }`}
                                >
                                    {cat}
                                    {activeFilter === cat && (
                                        <motion.span
                                            layoutId="filterUnderline"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c99472] rounded-full"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Masonry Grid with small gaps */}
                    <div className="columns-2 lg:columns-3 xl:columns-4 gap-2" style={{ columnFill: 'balance' }}>
                        <AnimatePresence mode="popLayout">
                            {filteredPhotos.map((photo, idx) => (
                                <RevealImage
                                    key={photo.id}
                                    photo={photo}
                                    onClick={() => openLightbox(idx)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ──────────── Narrative Lightbox ──────────── */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[2000] bg-[#1a110b]/96 backdrop-blur-lg flex flex-col items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close */}
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
                            className="absolute top-5 right-5 md:top-8 md:right-8 text-white/40 hover:text-[#c99472] transition-colors z-50 p-2"
                        >
                            <X size={28} strokeWidth={1.5} />
                        </button>

                        <div
                            className="relative w-full max-w-7xl flex flex-col md:flex-row items-center gap-6 md:gap-10 h-full px-4 md:px-8 py-16"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Prev — desktop */}
                            <button
                                onClick={prevPhoto}
                                className="hidden md:flex text-white/20 hover:text-[#c99472] transition-colors p-3"
                            >
                                <ChevronLeft size={44} strokeWidth={1} />
                            </button>

                            {/* Image */}
                            <div className="flex-1 w-full h-[55vh] md:h-[78vh] flex items-center justify-center relative">
                                <motion.img
                                    key={filteredPhotos[lightboxIndex].id}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    src={filteredPhotos[lightboxIndex].src}
                                    alt={filteredPhotos[lightboxIndex].alt}
                                    className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                                />

                                {/* Mobile nav arrows */}
                                <div className="absolute inset-0 flex items-center justify-between md:hidden px-2 pointer-events-none">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevPhoto() }}
                                        className="pointer-events-auto p-2 rounded-full bg-black/50 text-white/80 active:bg-[#c99472]"
                                    >
                                        <ChevronLeft size={22} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextPhoto() }}
                                        className="pointer-events-auto p-2 rounded-full bg-black/50 text-white/80 active:bg-[#c99472]"
                                    >
                                        <ChevronRight size={22} />
                                    </button>
                                </div>
                            </div>

                            {/* Narrative panel */}
                            <div className="w-full md:w-72 text-left md:h-[78vh] flex flex-col justify-end pb-4 md:pb-10 px-2 md:px-0">
                                <motion.div
                                    key={`txt-${filteredPhotos[lightboxIndex].id}`}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <p className="text-[#c99472] font-serif italic text-xl md:text-2xl mb-2">
                                        {filteredPhotos[lightboxIndex].category}
                                    </p>
                                    <h3 className="text-white/90 text-base md:text-lg font-light leading-relaxed">
                                        {filteredPhotos[lightboxIndex].alt}
                                    </h3>
                                </motion.div>
                            </div>

                            {/* Next — desktop */}
                            <button
                                onClick={nextPhoto}
                                className="hidden md:flex text-white/20 hover:text-[#c99472] transition-colors p-3"
                            >
                                <ChevronRight size={44} strokeWidth={1} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Climax CTA */}
            <ClimaxCTA />
        </>
    )
}
