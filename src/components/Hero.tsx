import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

import img1 from '../assets/images/firmlove-images/widows-1.jpg'; 
import img2 from '../assets/images/firmlove-images/roayalseed19.jpg'; 
import img3 from '../assets/images/firmlove-images/royalseed20.jpg';  
import img4 from '../assets/images/firmlove-images/korlebu-1.jpg';
import img5 from '../assets/images/firmlove-images/Ada3.jpg';
import img6 from '../assets/images/firmlove-images/group1.jpg';

export default function Hero() {
    // Cinematic Intro Lock
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            document.body.style.overflow = 'unset';
        }, 3000); 
        
        return () => {
            document.body.style.overflow = 'unset';
            clearTimeout(timer);
        };
    }, []);

    const cardTransition: any = {
        type: "spring",
        stiffness: 45,
        damping: 15,
        delay: 1.2 
    };

    const textTransition: any = {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.8 
    };

    // Shared image data for both layouts
    const images = [
        { src: img1, alt: "Community outreach" },
        { src: img2, alt: "Education" },
        { src: img3, alt: "Partnerships" },
        { src: img4, alt: "Pute Village" },
        { src: img5, alt: "Children smiling" },
        { src: img6, alt: "Community" },
    ];

    return (
        <div className="bg-white p-3 md:p-5 lg:p-6">

            {/* ============================================================ */}
            {/* MOBILE HERO — Flexbox Column (below md breakpoint)           */}
            {/* Uses normal document flow. Overlapping is impossible.        */}
            {/* ============================================================ */}
            <section className="md:hidden relative bg-gradient-to-b from-[#FDFBF7] to-[#F3E6DD] rounded-[2.5rem] pt-6 pb-6 overflow-hidden shadow-sm ring-1 ring-gray-900/5">
                
                {/* Background SVG curves */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                    <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute top-0 right-0 w-full h-full stroke-[#f3e6dd] fill-none" strokeWidth="2">
                        <path d="M 800 -100 C 400 200 300 800 600 1100 C 1300 1400 100 900 -200 500 C -400 200 300 -100 1200 -100 Z" />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center">

                    {/* TOP IMAGE CLUSTER — each image starts stacked at center, springs to its flex position */}
                    <div className="flex items-end justify-center gap-3 px-3 w-full">
                        {/* Left image - springs from center-right and below */}
                        <motion.div 
                            initial={{ x: 100, y: 250, rotate: 12, opacity: 0 }}
                            animate={{ x: 0, y: 0, rotate: -3, opacity: 1 }}
                            transition={cardTransition}
                            className="w-[28vw] aspect-square rounded-[1.2rem] overflow-hidden shadow-lg translate-y-[-10px] flex-shrink-0"
                        >
                            <img src={img2} alt="Education" className="w-full h-full object-cover" />
                        </motion.div>
                        {/* Center image - springs from below */}
                        <motion.div 
                            initial={{ x: 0, y: 250, rotate: 0, opacity: 0 }}
                            animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                            transition={cardTransition}
                            className="w-[42vw] aspect-[5/4] rounded-[1.5rem] overflow-hidden shadow-2xl flex-shrink-0"
                        >
                            <img src={img1} alt="Community outreach" className="w-full h-full object-cover" />
                        </motion.div>
                        {/* Right image - springs from center-left and below */}
                        <motion.div 
                            initial={{ x: -100, y: 250, rotate: -10, opacity: 0 }}
                            animate={{ x: 0, y: 0, rotate: 2, opacity: 1 }}
                            transition={cardTransition}
                            className="w-[28vw] aspect-square rounded-[1.2rem] overflow-hidden shadow-lg translate-y-[5px] flex-shrink-0"
                        >
                            <img src={img3} alt="Partnerships" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {/* CENTER TEXT BLOCK — fades in after images explode */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={textTransition}
                        className="relative z-30 flex flex-col items-center text-center px-6 -mt-4 pt-8 pb-6"
                    >
                        <div className="inline-block bg-[#c99472] text-white rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm">
                            Our Mission
                        </div>
                        
                        <h1 className="text-[2.5rem] leading-[1.05] font-bold text-gray-950 tracking-tight">
                            <span className="font-heading">Spreading love,</span> <br/>
                            <span className="font-serif italic font-normal text-gray-800 tracking-normal">bringing hope.</span>
                        </h1>
                        <p className="mt-5 text-sm text-gray-600 max-w-[340px] mx-auto leading-relaxed">
                            To restore dignity to the marginalized by providing essential humanitarian aid and compassionate care, while empowering the less privileged through transformative educational opportunities.
                        </p>
                        <div className="mt-6">
                            <button className="bg-[#594236] hover:bg-[#4a362c] text-white px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors shadow-lg flex items-center gap-3">
                                Donate now <HeartHandshake size={18} />
                            </button>
                        </div>
                    </motion.div>

                    {/* BOTTOM IMAGE CLUSTER — each image starts stacked at center, springs to its flex position */}
                    <div className="flex items-start justify-center gap-3 px-3 w-full -mt-2">
                        {/* Left image - springs from center-right and above */}
                        <motion.div 
                            initial={{ x: 100, y: -250, rotate: -8, opacity: 0 }}
                            animate={{ x: 0, y: 0, rotate: 2, opacity: 1 }}
                            transition={{ ...cardTransition, delay: 1.35 }}
                            className="w-[28vw] aspect-square rounded-[1.2rem] overflow-hidden shadow-lg translate-y-[5px] flex-shrink-0"
                        >
                            <img src={img5} alt="Children smiling" className="w-full h-full object-cover" />
                        </motion.div>
                        {/* Center image - springs from above */}
                        <motion.div 
                            initial={{ x: 0, y: -250, rotate: 0, opacity: 0 }}
                            animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                            transition={{ ...cardTransition, delay: 1.35 }}
                            className="w-[42vw] aspect-[5/4] rounded-[1.5rem] overflow-hidden shadow-2xl flex-shrink-0"
                        >
                            <img src={img4} alt="Pute Village" className="w-full h-full object-cover" />
                        </motion.div>
                        {/* Right image - springs from center-left and above */}
                        <motion.div 
                            initial={{ x: -100, y: -250, rotate: 10, opacity: 0 }}
                            animate={{ x: 0, y: 0, rotate: -3, opacity: 1 }}
                            transition={{ ...cardTransition, delay: 1.35 }}
                            className="w-[28vw] aspect-square rounded-[1.2rem] overflow-hidden shadow-lg translate-y-[-8px] flex-shrink-0"
                        >
                            <img src={img6} alt="Community" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>


                </div>
            </section>


            {/* ============================================================ */}
            {/* DESKTOP HERO — Absolute positioned explosion (md and above)  */}
            {/* This is the proven, approved desktop layout. Zero changes.   */}
            {/* ============================================================ */}
            <style>{`
                .hero-explosion-desktop {
                    --img1-x: 0px;    --img1-y: -250px; 
                    --img2-x: -400px; --img2-y: 20px;   
                    --img3-x: 400px;  --img3-y: 30px;   
                    --img4-x: 0px;    --img4-y: 320px;  
                    --img5-x: -320px; --img5-y: 220px;
                    --img6-x: 340px;  --img6-y: -180px; 
                }

                @media (min-width: 1024px) {
                    .hero-explosion-desktop {
                        --img1-x: 0px;    --img1-y: -300px;
                        --img2-x: -500px; --img2-y: 30px;   
                        --img3-x: 500px;  --img3-y: 40px;   
                        --img4-x: 0px;    --img4-y: 440px;
                        --img5-x: -380px; --img5-y: 260px;  
                        --img6-x: 340px;  --img6-y: -200px; 
                    }
                }
            `}</style>

            <section className="hidden md:block relative min-h-[1100px] bg-gradient-to-b from-[#FDFBF7] to-[#F3E6DD] rounded-[2.5rem] pt-32 pb-[250px] overflow-hidden shadow-sm ring-1 ring-gray-900/5">
                
                {/* Background SVG curves */}
                <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                    <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute top-0 right-0 w-full lg:w-3/4 h-full stroke-[#f3e6dd] fill-none" strokeWidth="2">
                        <path d="M 800 -100 C 400 200 300 800 600 1100 C 1300 1400 100 900 -200 500 C -400 200 300 -100 1200 -100 Z" />
                        <path d="M 600 -200 C 1200 400 100 1000 800 1500" />
                    </svg>
                </div>

                <div className="max-w-[1200px] mx-auto w-full px-4 flex-1 flex flex-col relative z-10 h-full" style={{ minHeight: 'calc(1100px - 8rem - 250px)' }}>
                    
                    <div className="flex-1 flex items-center justify-center relative hero-explosion-desktop h-full w-full">
                        
                        {/* QUOTE BUBBLE */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={textTransition}
                            className="absolute z-40 top-8 lg:top-12 left-2 lg:left-4 bg-[#FFF7F8] text-gray-900 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] w-[220px] shadow-xl border border-[#F4E0E2]"
                        >
                            <div className="absolute -top-2 left-6 md:left-8 w-4 h-4 md:w-5 md:h-5 bg-[#FFF7F8] transform rotate-45 border-t border-l border-[#F4E0E2]"></div>
                            <p className="text-[10px] md:text-sm leading-relaxed font-serif italic mb-3 text-gray-800">
                                "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in..."
                            </p>
                            <p className="font-bold text-[8px] md:text-[10px] tracking-widest text-[#c99472] uppercase">
                                Matthew 25:35 <span className="font-normal text-gray-400 ml-1">NIV</span>
                            </p>
                        </motion.div>

                        {/* CENTER TEXT */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={textTransition}
                            className="absolute z-40 flex flex-col items-center justify-center text-center w-full px-4 top-[38%] -translate-y-1/2"
                        >
                            <div className="inline-block bg-[#c99472] text-white rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase md:absolute md:-top-[30px] lg:-top-[40px] md:left-[18%] lg:left-[22%] shadow-sm transform md:-rotate-[12deg]">
                                Our Mission
                            </div>
                            
                            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] font-bold text-gray-950 tracking-tight max-w-3xl mx-auto">
                                <span className="font-heading">Spreading love,</span> <br/>
                                <span className="font-serif italic font-normal text-gray-800 tracking-normal">bringing hope.</span>
                            </h1>
                            <p className="mt-6 text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
                                To restore dignity to the marginalized by providing essential humanitarian aid and compassionate care, while empowering the less privileged through transformative educational opportunities.
                            </p>
                            <div className="mt-8">
                                <button className="bg-[#594236] hover:bg-[#4a362c] text-white px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors shadow-lg flex items-center gap-3">
                                    Donate now <HeartHandshake size={18} />
                                </button>
                            </div>
                        </motion.div>

                        {/* DESKTOP EXPLOSION IMAGES */}
                        <motion.div initial={{ x: 0, y: 0, rotate: 5 }} animate={{ x: "var(--img6-x)", y: "var(--img6-y)", rotate: 0 }} transition={cardTransition}
                            className="absolute z-20 w-[180px] lg:w-[220px] aspect-square rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={img6} alt="Community" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div initial={{ x: 0, y: 0, rotate: -4 }} animate={{ x: "var(--img5-x)", y: "var(--img5-y)", rotate: 0 }} transition={cardTransition}
                            className="absolute z-20 w-[180px] lg:w-[220px] aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={img5} alt="Children smiling" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div initial={{ x: 0, y: 0, rotate: 2 }} animate={{ x: "var(--img4-x)", y: "var(--img4-y)", rotate: 0 }} transition={cardTransition}
                            className="absolute z-20 w-[220px] lg:w-[260px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img src={img4} alt="Pute Village" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div initial={{ x: 0, y: 0, rotate: -6 }} animate={{ x: "var(--img3-x)", y: "var(--img3-y)", rotate: 0 }} transition={cardTransition}
                            className="absolute z-20 w-[200px] lg:w-[240px] aspect-square rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={img3} alt="Partnerships" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div initial={{ x: 0, y: 0, rotate: 4 }} animate={{ x: "var(--img2-x)", y: "var(--img2-y)", rotate: 0 }} transition={cardTransition}
                            className="absolute z-20 w-[200px] lg:w-[240px] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={img2} alt="Education" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div initial={{ x: 0, y: 0, rotate: 0 }} animate={{ x: "var(--img1-x)", y: "var(--img1-y)", rotate: 0 }} transition={cardTransition}
                            className="absolute z-20 w-[220px] lg:w-[260px] aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img src={img1} alt="Community outreach" className="w-full h-full object-cover" />
                        </motion.div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
