import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// Images
import imgEdu from '../assets/images/firmlove-images/allsaints1.jpg';
import imgMedical from '../assets/images/firmlove-images/korlebu3.jpg';
import imgCommunity from '../assets/images/firmlove-images/royalseed-2.jpg';
import imgWidows from '../assets/images/firmlove-images/widows-1.jpg';

// Animated Icons (Infinitely Looping as requested)
const PencilIcon = () => (
    <motion.div 
        animate={{ y: [0, -6, 0], rotate: [0, -5, 0] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="text-[#c99472]"
    >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            <path d="M15 5l4 4" />
        </svg>
    </motion.div>
);

const MedicalIcon = () => (
    <motion.div 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="text-[#c99472]"
    >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
        </svg>
    </motion.div>
);

const HouseIcon = () => (
    <motion.div 
        animate={{ y: [0, -4, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="text-[#c99472]"
    >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <path d="M9 22V12h6v10" />
        </svg>
    </motion.div>
);

const FlowerIcon = () => (
    <motion.div 
        animate={{ rotate: [0, 15, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="text-[#c99472]"
    >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22V12" />
            <path d="M12 12c-2-2-4-2-4 0 0 2 2 4 4 4s4-2 4-4c0-2-2-2-4 0z" />
            <path d="M12 12c0-2-2-4-4-4s-4 2-4 4c2 0 4 2 4 4" />
            <path d="M12 12c0-2 2-4 4-4s4 2 4 4c-2 0-4 2-4 4" />
        </svg>
    </motion.div>
);

const programs = [
    {
        id: 0,
        title: 'Education & Youth Empowerment',
        desc: 'Providing career guidance, educational materials, and financial support for pregnant teenagers, alongside distributing sanitary pads to keep girls in school.',
        img: imgEdu,
        icon: <PencilIcon />
    },
    {
        id: 1,
        title: 'Healthcare & Medical Relief',
        desc: 'Settling medical bills and lab fees for families in need at Korle Bu Child Health Dept, while donating essential hospital supplies like linens and sanitizers.',
        img: imgMedical,
        icon: <MedicalIcon />
    },
    {
        id: 2,
        title: 'Community & Orphanage Outreach',
        desc: 'Supporting the Royal Seed Orphanage with daily essentials, and organizing major Christmas outreach programs to provide food and clothing to children in Pute Village.',
        img: imgCommunity,
        icon: <HouseIcon />
    },
    {
        id: 3,
        title: 'Honoring Widows',
        desc: 'Through our "Sprinkles of Love" initiative, we provide festive financial support and essential items to widows and their children during the Christmas season.',
        img: imgWidows,
        icon: <FlowerIcon />
    }
];

// Reusable component for the scrolling text blocks
function ScrollingBlock({ 
    item, 
    index, 
    setActiveIndex 
}: { 
    item: typeof programs[0]; 
    index: number; 
    setActiveIndex: (idx: number) => void;
}) {
    const ref = useRef(null);
    // Trigger when the element crosses the middle of the screen
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div ref={ref} className="flex flex-col justify-center max-w-lg mx-auto lg:mx-0 py-12 lg:min-h-[100vh] lg:py-0">
            {/* Mobile Image Fallback - Only visible on small screens */}
            <div className="lg:hidden aspect-[4/3] w-full rounded-[2rem] overflow-hidden mb-10 shadow-md">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>

            <div className="mb-6">
                {item.icon}
            </div>
            
            {/* Orenda standard: Huge elegant Serif heading */}
            <h3 className="font-serif text-[2.5rem] md:text-5xl lg:text-[3.5rem] leading-[1.1] text-gray-900 mb-5 tracking-tight">
                {item.title}
            </h3>
            
            <p className="text-gray-600 font-sans text-lg md:text-[1.1rem] leading-[1.8]">
                {item.desc}
            </p>
        </div>
    );
}

export default function OurApproach() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="pt-24 pb-12 md:pt-32 bg-[#FDFBF7] relative">
            <div className="max-w-[1400px] mx-auto px-6">
                
                {/* Section Header (Static) */}
                <div className="max-w-4xl mb-16 lg:mb-[22vh] mx-auto text-center lg:text-left">
                    <div className="inline-block bg-[#c99472] text-white rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-10 shadow-sm transform -rotate-2 cursor-default">
                        Our Approach
                    </div>
                    <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold text-gray-950 tracking-tighter mb-8">
                        <span className="font-heading">Wherever there is a need,</span> <br />
                        <span className="font-serif italic font-normal text-[#c99472] text-[1.1em]">we bring hope.</span>
                    </h2>
                    <p className="text-[1.1rem] text-gray-600 leading-[1.8] font-sans max-w-xl mx-auto lg:mx-0">
                        True compassion adapts to wherever the need is greatest. Whether it's a widow in need of a meal, a student needing tuition, or a family drowning in hospital bills, we go where the pain is. <strong className="text-gray-900 font-semibold">We listen, and we act.</strong>
                    </p>
                </div>

                {/* The Sticky Scroll Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
                    
                    {/* LEFT COLUMN: Stationary Image (Desktop Only) */}
                    <div className="hidden lg:block col-span-6 relative h-full pt-[20vh]">
                        {/* 
                            Orenda standard: Perfectly vertically centered (top-1/2 -translate-y-1/2),
                            Landscape aspect ratio (4/3), with generous margins (w-[90%])
                        */}
                        <div className="sticky top-1/2 -translate-y-1/2 w-[90%] mx-auto aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
                            {programs.map((prog, idx) => (
                                <img 
                                    key={idx}
                                    src={prog.img} 
                                    alt={prog.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                        activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Scrolling Text Blocks */}
                    <div className="col-span-1 lg:col-span-6">
                        {/* Extra padding to ensure the last item can scroll into the center */}
                        <div className="lg:pb-[30vh]">
                            {programs.map((prog, idx) => (
                                <ScrollingBlock 
                                    key={prog.id} 
                                    item={prog} 
                                    index={idx} 
                                    setActiveIndex={setActiveIndex} 
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
