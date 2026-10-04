import { HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import imgGroup from '../assets/images/firmlove-images/group3.jpg'

export default function ClimaxCTA() {
    return (
        <section className="py-24 bg-[#FDFBF7]">
            <div className="max-w-[1400px] mx-auto px-6">
                
                {/* Full Image Banner Container */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[600px] flex items-center justify-end p-10 md:p-16 xl:p-24">
                    
                    {/* Background Image */}
                    <img 
                        src={imgGroup} 
                        alt="FirmLove Volunteers" 
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    
                    {/* Gradient Overlay: Darker on the right where the text sits to ensure perfect readability */}
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 md:from-black/10 md:via-black/40 to-black/80 z-0"></div>
                    
                    {/* Content positioned on the right half */}
                    <div className="relative z-10 w-full md:w-[60%] lg:w-[50%] text-left">
                        <h2 className="text-[clamp(3rem,5vw,5rem)] leading-[1.05] font-semibold text-white tracking-tighter mb-6 drop-shadow-md">
                            <span className="font-heading block">Compassion for a</span>
                            <span className="font-serif italic font-normal text-[#e6d0c0] block">better tomorrow</span>
                        </h2>
                        
                        <p className="text-gray-100 font-sans text-lg md:text-[1.1rem] leading-[1.8] mb-10 max-w-md drop-shadow-sm">
                            We believe in a world where every person, regardless of their background, has the right to dignity, opportunity, and hope.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide whitespace-nowrap bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 shadow-lg"
                            >
                                Become a volunteer
                            </Link>
                            <Link 
                                to="/donate" 
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide whitespace-nowrap bg-[#c99472] text-white hover:bg-[#b88361] transition-colors duration-300 shadow-lg"
                            >
                                Donate Now <HeartHandshake size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
