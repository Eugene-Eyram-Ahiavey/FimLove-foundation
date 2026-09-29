import { Heart } from 'lucide-react'
import imgGroup from '../assets/images/firmlove-images/group4.jpg'

export default function ClimaxCTA() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                
                {/* Architectural Split Banner Container */}
                <div className="flex flex-col lg:flex-row bg-[#15131A] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    
                    {/* Left Half: CharityFlow Style (Solid color, Typography, 2 Buttons) */}
                    <div className="lg:w-[45%] p-10 md:p-16 xl:p-24 flex flex-col justify-center relative z-10">
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold text-white tracking-tighter mb-6">
                            <span className="font-heading">Compassion for a</span><br />
                            <span className="font-serif italic font-normal text-[#c99472] text-[1.1em]">better tomorrow.</span>
                        </h2>
                        
                        <p className="text-gray-300 font-sans text-lg md:text-[1.1rem] leading-[1.8] mb-12 max-w-md">
                            Whether you give your time or your resources, you are bringing hope to those who need it most.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="/donate" 
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide whitespace-nowrap bg-[#c99472] text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
                            >
                                Donate Now <Heart size={16} className="fill-current" />
                            </a>
                            <a 
                                href="/volunteer" 
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide whitespace-nowrap bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
                            >
                                Become a volunteer
                            </a>
                        </div>
                    </div>

                    {/* Right Half: Hopely Style (Full-bleed photograph) */}
                    <div className="lg:w-[55%] relative min-h-[400px] lg:min-h-[auto]">
                        {/* 
                            We use object-cover and place it absolute so it perfectly 
                            fills the right half of the banner, regardless of screen size.
                        */}
                        <img 
                            src={imgGroup} 
                            alt="FirmLove Volunteers" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
