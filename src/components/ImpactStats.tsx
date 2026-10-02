import { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

// FirmLove Photos for each card
import orphansImg from '../assets/images/firmlove-images/royalseed5.jpg';
import educationImg from '../assets/images/firmlove-images/anglican-school.jpg';
import inmatesImg from '../assets/images/firmlove-images/james-camp-prison1.jpg';
import medicalImg from '../assets/images/firmlove-images/korlebu3.jpg';

const stats = [
    { 
        value: 200, 
        suffix: '+',
        label: 'Orphans Supported',
        descriptionLines: [
            'Providing care, shelter,',
            'and love to children',
            'who need it most.'
        ],
        image: orphansImg,
        bg: 'bg-[#c99472]',           // Warm copper
        textColor: 'text-white',
        labelColor: 'text-white/90',
        pillBg: 'bg-white',
        pillText: 'text-gray-900',
    },
    { 
        value: 200, 
        suffix: '+',
        label: 'Children Educated',
        descriptionLines: [
            'Empowering the next',
            'generation with school',
            'materials & learning.'
        ],
        image: educationImg,
        bg: 'bg-[#594236]',           // Dark brown
        textColor: 'text-white',
        labelColor: 'text-white/90',
        pillBg: 'bg-white',
        pillText: 'text-gray-900',
    },
    { 
        value: 100, 
        suffix: '+',
        label: 'Inmates Fed',
        descriptionLines: [
            'Delivering hope boxes',
            'with food and essentials',
            'to those behind bars.'
        ],
        image: inmatesImg,
        bg: 'bg-[#F3E6DD]',           // Warm cream
        textColor: 'text-gray-950',
        labelColor: 'text-gray-800',
        pillBg: 'bg-white',
        pillText: 'text-gray-900',
    },
    { 
        value: 10, 
        suffix: '+',
        label: 'Medical Debts Cleared',
        descriptionLines: [
            'Covering hospital bills',
            'so families can focus',
            'on healing, not debt.'
        ],
        image: medicalImg,
        bg: 'bg-[#FFF7F8]',           // Blush pink
        textColor: 'text-gray-950',
        labelColor: 'text-gray-800',
        pillBg: 'bg-white',
        pillText: 'text-gray-900',
    },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(val) {
                    setCount(Math.floor(val));
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function ImpactStats() {
    return (
        <section className="bg-white py-16 md:py-24 px-4 md:px-6 relative z-10 overflow-hidden">
            <div className="max-w-[1200px] mx-auto">

                {/* Section Header - Slanted Pill Style */}
                <div className="flex justify-center mb-12 md:mb-16">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-block bg-[#c99472] text-white rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase shadow-md transform -rotate-3"
                    >
                        Our Impact
                    </motion.div>
                </div>

                {/* 1 col mobile, 2 col tablet, 4 col desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                            className={`${stat.bg} rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden min-h-[380px] md:min-h-[420px] group shadow-sm hover:shadow-xl transition-shadow duration-500`}
                        >
                            <div className="p-7 md:p-8 flex flex-col h-full relative z-20 pointer-events-none">
                                {/* Top Content: Huge Number + Label */}
                                <div>
                                    <h3 className={`${stat.textColor} text-[4rem] font-bold leading-none tracking-tight`}>
                                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                    </h3>
                                    <p className={`${stat.labelColor} text-lg font-medium mt-2`}>
                                        {stat.label}
                                    </p>
                                </div>

                                {/* Stacked Description Pills - Ribbed Effect (gap-0) */}
                                <div className="mt-6 flex flex-col items-start gap-[1px]">
                                    {stat.descriptionLines.map((line, i) => (
                                        <span key={i} className={`${stat.pillBg} ${stat.pillText} rounded-full px-4 py-1 text-[13px] font-semibold shadow-sm`}>
                                            {line}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Photo — Gradient Faded (Muted Color Version) */}
                            <div 
                                className="absolute bottom-0 right-0 w-full h-[60%] z-0 overflow-hidden"
                                style={{ 
                                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)',
                                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%)'
                                }}
                            >
                                <img 
                                    src={stat.image} 
                                    alt={stat.label} 
                                    className="w-full h-full object-cover grayscale-[60%] opacity-85 transition-transform duration-700 group-hover:scale-110" 
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
