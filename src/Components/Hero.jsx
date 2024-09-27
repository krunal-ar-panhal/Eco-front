import React, { useEffect, useState } from 'react';
import Data from '../Data/HeroData.json';

const Hero = () => {
    const [banner, setBanner] = useState(0);
    const [fade, setFade] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 
            setTimeout(() => {
                setBanner((prevIndex) => (prevIndex + 1) % Data.length);
                setFade(true); 
            }, 500);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const currentData = Data[banner];

    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>{currentData.title}</p>
                    </div>
                    <div>
                        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>{currentData.subtitile}</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-medium text-sm md:text-base'>{currentData.text}</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-1/2'>
                <img
                    src={currentData.image}
                    alt="hero"
                    className={`w-full transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`} 
                />
            </div>
        </div>
    );
};

export default Hero;
