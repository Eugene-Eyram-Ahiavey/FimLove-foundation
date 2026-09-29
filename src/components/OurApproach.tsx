import { ArrowRight, HeartPulse, BookOpen, Shield, Users } from 'lucide-react'

// Images
import imgWidows from '../assets/images/firmlove-images/widows-1.jpg'
import imgEdu from '../assets/images/firmlove-images/royalseed17.jpg'
import imgMedical from '../assets/images/firmlove-images/korlebu-1.jpg'
// Placeholder for prison since we don't have photos yet
import imgPrison from '../assets/images/firmlove-images/james-camp-prison1.jpg' 

const initiatives = [
    {
        id: 1,
        title: 'Supporting Widows',
        desc: 'Providing sustenance and restoring dignity to widows who have been left vulnerable.',
        img: imgWidows,
        icon: <HeartPulse size={20} className="text-[#c99472]" />,
        colSpan: 'md:col-span-7',
    },
    {
        id: 2,
        title: 'Child Education',
        desc: 'Ensuring less privileged teenagers have access to quality education and mentorship.',
        img: imgEdu,
        icon: <BookOpen size={20} className="text-[#c99472]" />,
        colSpan: 'md:col-span-5',
    },
    {
        id: 3,
        title: 'Medical Relief',
        desc: 'Stepping in to clear hospital bills for families in desperate need of medical care.',
        img: imgMedical,
        icon: <Shield size={20} className="text-[#c99472]" />,
        colSpan: 'md:col-span-5',
    },
    {
        id: 4,
        title: 'Prison Outreach',
        desc: 'Spreading hope and providing essential supplies to individuals behind bars.',
        img: imgPrison, 
        icon: <Users size={20} className="text-[#c99472]" />,
        colSpan: 'md:col-span-7',
    }
]

export default function OurApproach() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
                
                {/* Section Header */}
                <div className="max-w-4xl mb-32">
                    <div className="inline-block bg-[#c99472] text-white rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm transform -rotate-2 cursor-default">
                        Our Approach
                    </div>
                    <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] font-semibold text-gray-950 tracking-tighter mb-8">
                        <span className="font-heading">Wherever there is a need,</span> <br />
                        <span className="font-serif italic font-normal text-gray-800 text-[1.1em]">we bring hope.</span>
                    </h2>
                    <p className="text-[1.05rem] text-gray-500 leading-[1.8] font-sans max-w-xl">
                        We don't believe compassion should be boxed into rigid programs. Whether it's a widow in need of a meal, a student needing tuition, or a family drowning in hospital bills, we go where the pain is. <strong className="text-gray-900 font-semibold">We listen, and we act.</strong>
                    </p>
                </div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
                    {initiatives.map((item) => (
                        <div key={item.id} className={`${item.colSpan} group cursor-pointer`}>
                            {/* Image Container */}
                            <div className="relative rounded-[2rem] overflow-hidden mb-8 bg-gray-100 shadow-sm border border-gray-100">
                                {/* Elderra style playful icon */}
                                <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-[#F3E6DD]">
                                    {item.icon}
                                </div>
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="pr-8">
                                <h3 className="font-heading text-2xl font-medium tracking-tight text-gray-900 mb-3 group-hover:text-[#c99472] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 font-sans text-[1.05rem] leading-[1.75]">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Banner placeholder - removed per user request */}
            </div>
        </section>
    )
}
