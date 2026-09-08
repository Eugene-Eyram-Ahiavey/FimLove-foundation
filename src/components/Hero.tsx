import { ArrowDown, Facebook, Instagram, Twitter } from 'lucide-react';

import img1 from '../assets/images/firmlove-images/widows-1.jpg'; 
import img2 from '../assets/images/firmlove-images/royalseed17.jpg'; 
import img3 from '../assets/images/firmlove-images/royalseed6.jpg';  
import img4 from '../assets/images/firmlove-images/korlebu-1.jpg';
import img5 from '../assets/images/firmlove-images/Ada3.jpg';

export default function Hero() {
    return (
        <div className="bg-white p-3 md:p-5 lg:p-6">
            <section className="relative min-h-[calc(100vh-3rem)] bg-gradient-to-b from-[#FDFBF7] to-[#F3E6DD] rounded-[2.5rem] pt-32 pb-12 overflow-hidden flex flex-col justify-between shadow-sm ring-1 ring-gray-900/5">
            {/* Background SVG curves for organic feel */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="absolute top-0 right-0 w-full lg:w-3/4 h-full stroke-[#f3e6dd] fill-none" strokeWidth="2">
                    <path d="M 800 -100 C 400 200 300 800 600 1100 C 1300 1400 100 900 -200 500 C -400 200 300 -100 1200 -100 Z" />
                    <path d="M 600 -200 C 1200 400 100 1000 800 1500" />
                </svg>
            </div>

            <div className="max-w-[1600px] mx-auto w-full px-6 flex-1 flex flex-col lg:flex-row relative z-10">
                {/* Vertical Action Rail */}
                <div className="hidden lg:flex flex-col items-center justify-between w-24 py-8 border-r border-gray-100">
                    <div className="flex flex-col items-center gap-6 mt-12">
                        <div className="flex flex-col gap-2 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c99472]"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                        </div>
                        <button className="w-16 h-16 rounded-full bg-[#c99472] flex items-center justify-center hover:bg-[#c99472]/90 transition-colors text-white shadow-lg">
                            <ArrowDown size={24} />
                        </button>
                        <div className="text-[10px] font-bold tracking-widest text-gray-500 mt-6 text-center leading-relaxed">
                            DISCOVER<br/>FOUNDATION
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6 text-[#c99472]/70">
                        <a href="#" className="hover:text-[#c99472] transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-[#c99472] transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-[#c99472] transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 lg:pl-16 pt-8 lg:pt-12 flex flex-col">
                    {/* Top Section: Typography & Quote */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
                        
                        {/* Two-Tier Headline */}
                        <div className="max-w-3xl relative">
                            <div className="inline-block bg-[#c99472] text-white rounded-full px-5 py-2 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm transform -rotate-3 hover:-rotate-6 transition-transform cursor-default">
                                Our Mission
                            </div>
                            <h1 className="text-[clamp(3.5rem,7vw,6.5rem)] leading-[1.05] font-black text-gray-950 tracking-tight">
                                <span className="font-heading">Spreading love,</span> <br className="hidden md:block"/>
                                <span className="font-serif italic font-normal text-gray-800 tracking-normal">bringing hope.</span>
                            </h1>
                        </div>

                        {/* Floating Quote Bubble */}
                        <div className="lg:mt-8 bg-[#FFF7F8] text-gray-900 p-8 rounded-2xl max-w-[340px] relative shadow-xl border border-[#F4E0E2] z-10">
                            <div className="absolute -bottom-3 left-12 w-6 h-6 bg-[#FFF7F8] transform rotate-45 border-b border-r border-[#F4E0E2]"></div>
                            <p className="text-sm leading-relaxed font-serif italic mb-4 text-gray-800">
                                "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in, I needed clothes and you clothed me, I was sick and you looked after me..."
                            </p>
                            <p className="font-bold text-xs tracking-widest text-[#c99472] uppercase">Matthew 25:35-36 <span className="font-normal text-gray-400 ml-1">NIV</span></p>
                        </div>
                    </div>

                    {/* Masonry Image Strip */}
                    <div className="mt-auto relative z-10">
                        {/* Mobile Carousel / Desktop Masonry Strip */}
                        <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 lg:gap-3 pb-6 hide-scrollbar snap-x snap-mandatory items-start">
                            
                            {/* Image 1: Square-ish portrait */}
                            <div className="relative rounded-2xl overflow-hidden min-w-[280px] lg:min-w-0 lg:col-span-1 aspect-[4/5] snap-center group lg:mt-4">
                                <img src={img1} alt="Community outreach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>

                            {/* Image 2: Tall Portrait (staggered down) */}
                            <div className="relative rounded-2xl overflow-hidden min-w-[280px] lg:min-w-0 lg:col-span-1 aspect-[3/4] snap-center group lg:mt-20">
                                <img src={img2} alt="Education program" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>

                            {/* Image 3: Tall Portrait (staggered up) */}
                            <div className="relative rounded-2xl overflow-hidden min-w-[280px] lg:min-w-0 lg:col-span-1 aspect-[3/4] snap-center group lg:mt-2">
                                <img src={img4} alt="Pute Village" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>

                            {/* Image 4: Wide Horizontal (staggered up) */}
                            <div className="relative rounded-2xl overflow-hidden min-w-[320px] lg:min-w-0 lg:col-span-2 aspect-[4/3] snap-center group lg:mt-4">
                                <img src={img3} alt="Partnership and appreciation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>

                            {/* Image 5: Tall Portrait (staggered down) */}
                            <div className="relative rounded-2xl overflow-hidden min-w-[280px] lg:min-w-0 lg:col-span-1 aspect-[3/4] snap-center group lg:mt-12">
                                <img src={img5} alt="Children smiling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}
