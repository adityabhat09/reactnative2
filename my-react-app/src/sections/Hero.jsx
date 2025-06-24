import React from 'react';
import { Play, Star } from 'lucide-react';
import heroimg from '../images/heroimg.png'
import heroimg2 from '../images/heroimg2.png'
const Hero = () => {
    return (
        <div className='bg-gradient-to-br min-h-screen p-6 flex justify-center'>
            <div className='max-w-8xl '>
                <div className='bg-[#E8F6FF] rounded-3xl shadow-xl overflow-hidden border-4 border-blue-200'>
                    <div className='flex flex-col lg:flex-row '>
                        {/* Left Content */}
                        <div className='lg:w-3/5 p-8 lg:p-12 space-y-8 align-middle'>
                            <div className='space-y-6'>
                                <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
                                    Unlock Your
                                    <br />
                                    Potential with
                                    <br />
                                    <span className='text-blue-600'>Online Learning</span>
                                </h1>
                                
                                <p className='text-gray-600 text-lg leading-relaxed'>
                                    Embark on a journey of knowledge and skill enhancement 
                                    with our online courses. Whether you're looking to acquire 
                                    new expertise or refine existing talents, our diverse range of 
                                    courses offers a flexible and engaging learning experience. 
                                    Empower yourself today!
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
                                    Get Started
                                </button>
                                <button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg'>
                                    <Play size={20} />
                                    Learn More
                                </button>
                            </div>

                            {/* 10K+ Students - Single Image */}
                            <div className='max-w-xl'>
                                <img 
                                    src={heroimg2}
                                    alt='10K+ Students have already launched their careers with JustAcademy'
                                    className='max-w-full h-auto'
                                />
                            </div>
                        </div>

                        {/* Right Content - Single Hero Image */}
                        {/* <div className='lg:w-1/2 self-end flex justify-center  p-8 lg:p-12'> */}
                            {/* Single Hero Image */}
                            <div className='relative self-end'>
                                <img 
                                    className='w-full h-auto max-w-lg lg:max-w-xl'

                                    src={heroimg}
                                    alt='Student learning online'
                                />
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;