'use client'
import React from 'react';
import Button from './Button';
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <section className='container lg:mx-auto py-12 pb-20'>
            <div className="flex flex-col gap-4">
                <div className="w-3/4">
                    <h2 className="text-lg font-semibold robotoslab-font" style={{ color: "#ff335f" }}>HELLO, MY NAME IS ROB</h2>
                </div>
                <div className="flex flex-col">
                    <div className='py-5'>
                        <h1 className="text-4xl sm:text-7xl opacity-60" >I build amazing web and mobile apps.</h1>
                    </div>
                    <p className="text-xl sm:text-3xl mt-4 robotoslab-font">
                        I'm a software engineer and full stack developer, I can make your ideas real.<br />
                    </p>
                    <div className='pt-5 pb-5 flex justify-center lg:justify-start'>
                        <Link href="#projects">
                            <Button
                                title='Explore my work'
                                type='button'
                                variant='btn btn-warning text-black robotoslab-font'
                                onClick={() => console.log('Click the button')}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
