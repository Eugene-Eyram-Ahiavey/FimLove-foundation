import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import img1 from '../assets/images/firmlove-images/Ada1.jpg'
import img2 from '../assets/images/firmlove-images/royalseed14.jpg'
import img3 from '../assets/images/firmlove-images/anglican-school.jpg'

const content = [
  { type: 'text', value: "The" },
  { type: 'text', value: "story" },
  { type: 'text', value: "isn't" },
  { type: 'text', value: "finished." },
  { type: 'text', value: "There" },
  { type: 'text', value: "are" },
  { type: 'text', value: "still" },
  { type: 'text', value: "lives" },
  { type: 'text', value: "to" },
  { type: 'text', value: "reach," },
  { type: 'image', src: img1 },
  { type: 'text', value: "communities" },
  { type: 'text', value: "to" },
  { type: 'text', value: "strengthen," },
  { type: 'text', value: "and" },
  { type: 'text', value: "opportunities" },
  { type: 'text', value: "to" },
  { type: 'text', value: "create." },
  { type: 'text', value: "Every" },
  { type: 'text', value: "act" },
  { type: 'text', value: "of" },
  { type: 'text', value: "compassion" },
  { type: 'image', src: img2 },
  { type: 'text', value: "brings" },
  { type: 'text', value: "us" },
  { type: 'text', value: "one" },
  { type: 'text', value: "step" },
  { type: 'text', value: "closer" },
  { type: 'text', value: "to" },
  { type: 'text', value: "a" },
  { type: 'text', value: "world" },
  { type: 'text', value: "where" },
  { type: 'text', value: "every" },
  { type: 'text', value: "person" },
  { type: 'text', value: "has" },
  { type: 'text', value: "the" },
  { type: 'text', value: "chance" },
  { type: 'text', value: "to" },
  { type: 'text', value: "live" },
  { type: 'text', value: "with" },
  { type: 'text', value: "dignity," },
  { type: 'text', value: "hope," },
  { type: 'text', value: "and" },
  { type: 'text', value: "purpose." },
  { type: 'text', value: "Together," },
  { type: 'text', value: "we" },
  { type: 'text', value: "can" },
  { type: 'text', value: "help" },
  { type: 'image', src: img3 },
  { type: 'text', value: "write" },
  { type: 'text', value: "what" },
  { type: 'text', value: "comes" },
  { type: 'text', value: "next." },
]

export default function ScrollReveal() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start animation slightly earlier so the user has time to read
        offset: ["start 70%", "end 80%"]
    })

    const animatableItems = content.filter(item => item.type !== 'break')
    const step = 1 / animatableItems.length
    let animatableIndex = 0

    return (
        <section ref={containerRef} className="h-[250vh] bg-[#FDFBF7] relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12">
                
                <div className="text-center mb-10 flex justify-center">
                    <span className="inline-block px-6 py-2 rounded-full text-[0.85rem] font-bold tracking-[0.15em] uppercase bg-[#c99472] text-white -rotate-3 shadow-md transform">
                        The Road Ahead
                    </span>
                </div>

                {/* Narrow max width allows natural paragraph wrapping. Orenda uses a serif font for this body */}
                <div className="max-w-[750px] mx-auto text-center font-serif text-[1.4rem] md:text-[1.75rem] lg:text-[2.1rem] leading-[1.8] md:leading-[2] lg:leading-[2.2] text-[#15131A]">
                    {content.map((item, i) => {
                        const currentIdx = animatableIndex++
                        const start = currentIdx * step
                        // Reduced overlap slightly for crisper word-by-word reveal
                        const end = Math.min(1, start + (step * 2)) 

                        if (item.type === 'text') {
                            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{item.value}</Word>
                        }

                        if (item.type === 'image') {
                            return <ImagePill key={i} progress={scrollYProgress} range={[start, end]} src={item.src!} />
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
    // Opacity fades from very dim (15%) to solid black
    const opacity = useTransform(progress, range, [0.15, 1])
    
    return (
        <span className="inline-block mr-[0.25em]">
            <motion.span style={{ opacity }} className="text-[#15131A]">
                {children}
            </motion.span>
        </span>
    )
}

function ImagePill({ src, progress, range }: { src: string, progress: MotionValue<number>, range: [number, number] }) {
    // Make the pill wider and taller to match the screenshot's overlap
    const width = useTransform(progress, range, ["0em", "3em"])
    const opacity = useTransform(progress, range, [0, 1])
    const margin = useTransform(progress, range, ["0em", "0.2em"])

    return (
        <span className="inline-block align-middle overflow-hidden h-[1.6em] rounded-2xl mx-1" style={{ verticalAlign: '-0.3em' }}>
            <motion.span 
                style={{ width, opacity, marginRight: margin, marginLeft: margin }}
                className="block h-full relative origin-left shadow-md"
            >
                <img src={src} alt="inline" className="absolute inset-0 w-full h-full object-cover" />
            </motion.span>
        </span>
    )
}
