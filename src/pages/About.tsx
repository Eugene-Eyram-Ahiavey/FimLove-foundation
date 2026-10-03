import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Eye, HandHeart, Heart, Quote } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion'
import founderImage from "../assets/images/Dr-Hafisah.jpg"
import heroImage from "../assets/images/firmlove-images/group-5.jpg"
import journeyImage from "../assets/images/firmlove-images/royalseed18.jpg"
import img2 from "../assets/images/firmlove-images/Ada1.jpg"
import img3 from "../assets/images/firmlove-images/anglican-school.jpg"
import img4 from "../assets/images/firmlove-images/group6.jpg"
import img5 from "../assets/images/firmlove-images/royalseed14.jpg"
import img6 from "../assets/images/firmlove-images/widows-1.jpg"
import img7 from "../assets/images/firmlove-images/korlebu3.jpg"

const leftMetrics = [
    { value: "200+", label: "Orphans Supported" },
    { value: "200+", label: "Children Educated" }
]

const rightMetrics = [
    { value: "100+", label: "Inmates Fed" },
    { value: "10+", label: "Medical Debts Cleared" }
]

export default function About() {
    const [metricIndex, setMetricIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setMetricIndex((prev) => (prev + 1) % leftMetrics.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])
    return (
        <>
            <Helmet>
                <title>About Us — FirmLove Foundation</title>
                <meta name="description" content="Learn about FirmLove Foundation's story, mission, vision, and the team behind our community impact programs." />
            </Helmet>

            {/* Redesigned Hero with Solid Warm Cream Background */}
            <section className="pt-40 pb-24 bg-[#F3E6DD] relative overflow-hidden font-sans">

                <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                        
                        {/* Left Column (Typography & CTA) */}
                        <div className="pr-0 lg:pr-12">
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[3rem] md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] text-gray-950 tracking-tight mb-8"
                            >
                                Bringing Hope to Those Who Need It Most.
                            </motion.h1>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[1.1rem] leading-[1.8] text-gray-600 mb-10 max-w-[420px]"
                            >
                                In a world often clouded by indifference, we believe the power of love must remain unyielding. We exist simply to show love through action.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <a href="/donate" className="bg-[#594236] hover:bg-[#4a362c] text-white px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors shadow-lg inline-flex items-center gap-3">
                                    Donate Now <Heart size={16} className="fill-current" />
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Column (Image Anchor & Floating Auto-Flipping Cards) */}
                        <motion.div 
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full h-[600px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                        >
                            <img 
                                src={heroImage} 
                                alt="FirmLove Community Action" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            
                            {/* Auto-flipping Trust Cards - Redesigned to match ImpactStats typography */}
                            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex flex-col md:flex-row gap-3 md:gap-4 w-[90%] md:w-auto z-20">
                                {/* Card 1 (White background) */}
                                <div className="w-[90%] max-w-[280px] md:max-w-none md:w-[240px] h-auto min-h-[140px] md:min-h-0 md:h-[240px] bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-center overflow-hidden relative shadow-2xl">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={metricIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col h-full justify-center"
                                        >
                                            <div className="text-[3rem] md:text-[4rem] font-bold leading-none tracking-tight text-[#c99472] mb-2">
                                                {leftMetrics[metricIndex].value}
                                            </div>
                                            <div className="text-[0.9rem] md:text-lg font-medium text-gray-800 leading-snug">
                                                {leftMetrics[metricIndex].label}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Card 2 (Espresso Dark background) */}
                                <div className="w-[90%] max-w-[280px] md:max-w-none md:w-[240px] h-auto min-h-[140px] md:min-h-0 md:h-[240px] bg-[#3a271d] rounded-3xl p-6 md:p-8 flex flex-col justify-center overflow-hidden relative shadow-2xl">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={metricIndex}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.4, delay: 0.1 }}
                                            className="flex flex-col h-full justify-center"
                                        >
                                            <div className="text-[3rem] md:text-[4rem] font-bold leading-none tracking-tight text-white mb-2">
                                                {rightMetrics[metricIndex].value}
                                            </div>
                                            <div className="text-[0.9rem] md:text-lg font-medium text-white/95 leading-snug">
                                                {rightMetrics[metricIndex].label}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Frictionless Text Reveal */}
            <FrictionlessReveal text="Even when darkness seems to rise, the power of compassion must remain unyielding. We exist to be the hands and feet of love in our communities." />

            {/* Our Journey 2-Column Section */}
            <section className="pt-24 pb-6 px-6 max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left: Image */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-[450px] md:h-[600px] rounded-[2.5rem] overflow-hidden"
                    >
                        <img 
                            src={journeyImage} 
                            alt="Royal Seed Home Thank You" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right: Content Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#FFF7F8] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center"
                    >
                        <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-[#3a271d] leading-tight mb-6 tracking-tight">
                            Our Journey
                        </h2>
                        <p className="text-[#3a271d]/85 text-[1.1rem] md:text-[1.2rem] leading-[1.8] mb-10">
                            What began as a response to the immediate needs of the marginalized in Ghana has grown into a lifelong mission. We don't just speak about empathy; we live it, striving every day to ensure no one feels forgotten.
                        </p>
                        <div>
                            <a href="/donate" className="bg-[#3a271d] hover:bg-[#2c1d15] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors inline-flex items-center gap-3">
                                Join Our Mission <Heart size={18} className="fill-current" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission (2-Column Reference Layout) */}
            <section className="pt-2 pb-24 px-6 max-w-[1300px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Mission Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border border-gray-200/80 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-[64px] h-[64px] bg-[#fdf8f5] rounded-[1.25rem] flex items-center justify-center text-[#c99472] mb-8">
                            <HandHeart size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[1.8rem] md:text-[2.2rem] font-medium text-gray-900 tracking-tight mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                            To restore dignity to the marginalized by providing essential humanitarian aid and compassionate care, while empowering the less privileged through transformative educational opportunities.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white border border-gray-200/80 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-[64px] h-[64px] bg-[#fdf8f5] rounded-[1.25rem] flex items-center justify-center text-[#c99472] mb-8">
                            <Heart size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[1.8rem] md:text-[2.2rem] font-medium text-gray-900 tracking-tight mb-4">
                            Our Vision
                        </h3>
                        <p className="text-gray-600 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                            Our vision is a world transformed by compassion, where unyielding love prevails over indifference—starting within Ghana and extending across borders to uplift humanity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder's Message (Hopper Editorial Layout) */}
            <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        
                        {/* Text Content (Left side, takes up 7 cols) */}
                        <div className="lg:col-span-7">
                            <div className="mb-6">
                                <Quote size={40} className="text-[#c99472] opacity-40 rotate-180 mb-5" />
                                <h2 className="text-[1.8rem] md:text-[2.2rem] font-medium text-[#15131A] leading-[1.3] tracking-tight">
                                    Love is more than something we feel; it is something we choose to do.
                                </h2>
                            </div>
                            
                            <div className="space-y-5 text-gray-600 text-[1.05rem] md:text-[1.1rem] leading-[1.7] font-light max-w-[550px]">
                                <p>
                                    There are moments when the needs around us can feel overwhelming, but I have come to believe that even in the face of hardship, one simple act of love can restore hope and dignity.
                                </p>
                                <p>
                                    Firmlove Foundation was born from this conviction. Inspired by the words of Matthew 25:35–36, I believe that our faith is best expressed through how we respond to people in need — by feeding the hungry, supporting the vulnerable, caring for the sick, and standing alongside those who may feel forgotten.
                                </p>
                                <p>
                                    What began as a response to immediate needs has become a lifelong commitment to serving others. From supporting young people in their education to providing a meal to someone who has nowhere to turn, every act of service is an opportunity to remind someone that they matter.
                                </p>
                                <p className="font-medium text-[#3a271d]">
                                    This is the heart of Firmlove: to turn compassion into action and make love visible, one life at a time.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-200/60">
                                <strong className="text-[#15131A] text-lg font-bold block mb-0.5">Dr. Hafisah Quansah</strong>
                                <span className="text-[#c99472] tracking-widest text-[0.8rem] uppercase font-semibold">Founder, Firmlove Foundation</span>
                            </div>
                        </div>

                        {/* Image (Right side, takes up 5 cols) */}
                        <div className="lg:col-span-5">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-sm relative"
                            >
                                <img
                                    src={founderImage}
                                    alt="Dr. Hafisah Quansah - Founder"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Orenda Scroll-Driven Image Constellation Finale */}
            <OrendaScrollEffect />
        </>
    )
}

function FrictionlessReveal({ text }: { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "end 50%"]
    })

    const words = text.split(" ")
    const step = 1 / words.length

    return (
        <section ref={containerRef} className="pt-16 pb-32 md:pt-24 md:pb-40 bg-[#FDFBF7] flex items-center justify-center px-6">
            <div className="max-w-[850px] mx-auto text-center font-sans font-light tracking-wide text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] leading-[1.2] md:leading-[1.25]">
                {words.map((word, i) => {
                    const start = i * step
                    // Slightly overlap the fade-ins for a smoother read
                    const end = Math.min(1, start + (step * 2.5))
                    return (
                        <RevealWord key={i} progress={scrollYProgress} range={[start, end]}>
                            {word}
                        </RevealWord>
                    )
                })}
            </div>
        </section>
    )
}

function RevealWord({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.15, 1])
    return (
        <span className="inline-block mr-[0.25em]">
            <motion.span style={{ opacity }} className="text-[#15131A]">
                {children}
            </motion.span>
        </span>
    )
}

function OrendaScrollEffect() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Animation progress range - make it finish a bit earlier so it stays formed while scrolling down
    const start = 0.05
    const end = 0.4

    // Text Fade In (happens as images move out) - finish earlier
    const textOpacity = useTransform(scrollYProgress, [start + 0.15, end - 0.05], [0, 1])
    const textY = useTransform(scrollYProgress, [start + 0.15, end - 0.05], [30, 0])

    // Scale for all images EXCPET the front-most one. This is the secret to the perfect stack.
    const bgScale = useTransform(scrollYProgress, [start, start + 0.1], [0.4, 1])
    
    // Front-most image scale (Bottom-Center). It stays at 1.
    const frontScale = useTransform(scrollYProgress, [0, 1], [1, 1]) // constant

    // Coordinates mapping
    const mapCoords = (desktopX: number, desktopY: number, mobileX: number, mobileY: number) => {
        const x = isMobile ? mobileX : desktopX
        const y = isMobile ? mobileY : desktopY
        // Start all at exactly 0,0
        return {
            x: useTransform(scrollYProgress, [start, end], [0, x]),
            y: useTransform(scrollYProgress, [start, end], [0, y])
        }
    }

    // Desktop: Top-Left: x: -260, y: -220 | Mobile: x: -120, y: -180
    const coords1 = mapCoords(-260, -220, -120, -180)
    
    // Desktop: Top-Center: x: 0, y: -260 | Mobile: x: 0, y: -220
    const coords2 = mapCoords(0, -260, 0, -220)
    
    // Desktop: Top-Right: x: 260, y: -220 | Mobile: x: 120, y: -180
    const coords3 = mapCoords(260, -220, 120, -180)
    
    // Desktop: Center-Left: x: -380, y: 0 | Mobile: Hidden (so coords don't matter much)
    const coords4 = mapCoords(-380, 0, 0, 0)
    
    // Desktop: Center-Right: x: 380, y: 0 | Mobile: Hidden
    const coords5 = mapCoords(380, 0, 0, 0)
    
    // Desktop: Bottom-Left: x: -260, y: 220 | Mobile: x: -120, y: 180
    const coords6 = mapCoords(-260, 220, -120, 180)
    
    // Desktop: Bottom-Center (Front): x: 0, y: 260 | Mobile: x: 0, y: 220
    const coords7 = mapCoords(0, 260, 0, 220)
    
    // Desktop: Bottom-Right: x: 260, y: 220 | Mobile: x: 120, y: 180
    const coords8 = mapCoords(260, 220, 120, 180)

    // Cleaned up classes with beautifully proportionate sizes
    const largeImgClass = "absolute inset-0 m-auto overflow-hidden shadow-xl w-[140px] h-[140px] md:w-[220px] md:h-[220px] rounded-[2rem] md:rounded-[2.5rem]"
    const smallImgClass = "absolute inset-0 m-auto overflow-hidden shadow-lg w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-2xl md:rounded-3xl"

    return (
        <section ref={containerRef} className="h-[250vh] relative bg-[#FDFBF7]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                
                {/* Text (Center) - High contrast, perfectly centered */}
                <motion.div 
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute inset-0 m-auto z-[100] flex flex-col items-center justify-center text-center px-6 max-w-2xl pointer-events-none"
                >
                    <h2 className="text-[2.2rem] md:text-[3.8rem] font-medium text-[#111827] leading-[1.1] tracking-tight mb-5 font-serif">
                        A Family United<br className="hidden md:block" /> to Create Change
                    </h2>
                    <p className="text-gray-700 max-w-md mx-auto text-base md:text-lg mb-8 font-light">
                        Together we stand, support communities, and work every day to build a kinder and stronger future.
                    </p>
                    <div className="pointer-events-auto">
                        {/* Elegant dark espresso button */}
                        <a href="/donate" className="bg-[#3a271d] hover:bg-[#2a1b13] text-white px-8 py-3.5 rounded-full font-light tracking-wide transition-colors inline-flex items-center gap-3 text-[15px]">
                            Join us <span className="text-[#c99472] font-serif italic text-lg leading-none">&rarr;</span>
                        </a>
                    </div>
                </motion.div>

                {/* Constellation Images */}
                <div className="relative w-full h-full pointer-events-none">
                    
                    {/* 1. Top-Left (Small) */}
                    <motion.div style={{ x: coords1.x, y: coords1.y, scale: bgScale }} className={`${smallImgClass} z-10`}>
                        <img src={img2} className="w-full h-full object-cover" alt="Impact" />
                    </motion.div>

                    {/* 2. Top-Center (Large) */}
                    <motion.div style={{ x: coords2.x, y: coords2.y, scale: bgScale }} className={`${largeImgClass} z-20`}>
                        <img src={journeyImage} className="w-full h-full object-cover" alt="Impact" />
                    </motion.div>

                    {/* 3. Top-Right (Small) */}
                    <motion.div style={{ x: coords3.x, y: coords3.y, scale: bgScale }} className={`${smallImgClass} z-30`}>
                        <img src={img3} className="w-full h-full object-cover" alt="Impact" />
                    </motion.div>

                    {/* 4. Center-Left (Large) - HIDDEN ON MOBILE */}
                    <motion.div style={{ x: coords4.x, y: coords4.y, scale: bgScale }} className={`${largeImgClass} z-40 hidden md:block`}>
                        <img src={img4} className="w-full h-full object-cover" alt="Impact" />
                    </motion.div>

                    {/* 5. Center-Right (Large) - HIDDEN ON MOBILE */}
                    <motion.div style={{ x: coords5.x, y: coords5.y, scale: bgScale }} className={`${largeImgClass} z-50 hidden md:block`}>
                        <img src={img5} className="w-full h-full object-cover" alt="Impact" />
                    </motion.div>

                    {/* 6. Bottom-Left (Small) */}
                    <motion.div style={{ x: coords6.x, y: coords6.y, scale: bgScale }} className={`${smallImgClass} z-60`}>
                        <img src={img6} className="w-full h-full object-cover" alt="Impact" />
                    </motion.div>

                    {/* 8. Bottom-Right (Small) */}
                    <motion.div style={{ x: coords8.x, y: coords8.y, scale: bgScale }} className={`${smallImgClass} z-70`}>
                        <img src={img7} className="w-full h-full object-cover" alt="Impact" />
                    </motion.div>

                    {/* 7. Bottom-Center (Large) - FRONT-MOST, NEVER SCALED DOWN */}
                    <motion.div style={{ x: coords7.x, y: coords7.y, scale: frontScale }} className={`${largeImgClass} z-[80]`}>
                        <img src={heroImage} className="w-full h-full object-cover" alt="FirmLove Action" />
                    </motion.div>

                </div>

            </div>
        </section>
    )
}
