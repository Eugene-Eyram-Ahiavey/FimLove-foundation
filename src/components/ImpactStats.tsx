import { Users, BookOpen, HeartPulse, Shield } from 'lucide-react'

const stats = [
    { value: '200+', label: 'Widows Supported', icon: <HeartPulse className="text-[#c99472]" size={24} /> },
    { value: '100+', label: 'Children Educated', icon: <BookOpen className="text-[#c99472]" size={24} /> },
    { value: 'Relief', label: 'Medical Bills Paid', icon: <Shield className="text-[#c99472]" size={24} /> },
    { value: 'Hope', label: 'Prison Outreach', icon: <Users className="text-[#c99472]" size={24} /> },
]

export default function ImpactStats() {
    return (
        <div className="bg-white px-3 md:px-5 lg:px-6">
            <div className="relative z-20 max-w-[1500px] mx-auto px-6 -mt-20 md:-mt-28 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col relative group transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(201,148,114,0.12)]">
                            {/* Asymmetric Background Block (Karunas style) */}
                            <div className="absolute top-0 left-0 w-[45%] h-full bg-[#F3E6DD]/30 group-hover:bg-[#F3E6DD]/50 transition-colors duration-500"></div>
                            
                            <div className="p-8 relative z-10 flex flex-col h-full">
                                {/* Playful Circle Icon (Elderra style) */}
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-10 border border-[#F3E6DD]">
                                    {stat.icon}
                                </div>
                                
                                <div className="mt-auto">
                                    <h3 className="font-heading text-4xl lg:text-5xl font-black text-gray-900 mb-2 tracking-tight">
                                        {stat.value}
                                    </h3>
                                    <p className="font-sans text-gray-500 font-medium tracking-wide">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Anchor Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#c99472]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
