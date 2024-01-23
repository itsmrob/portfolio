import React from 'react';
import Image from 'next/image';
import profilePic from '@/images/myself.jpg'; // Replace with the path to your image

const HeroSection: React.FC = () => {
    return (
        <div className="flex">
            <main className="w-3/4 p-8">
            <h2 className="text-lg font-semibold" style={{ color: "#ff335f"}}>HELLO, MY NAME IS ROB </h2>
                <div className="flex flex-col justify-center h-full">
                    <h1 className="text-7xl font-bol opacity-50" style={{ color: "#373a3c"}}>I make websites and mobile apps.</h1>
                    <p className="text-base text-blue-800 mt-4" style={{ color: "#373a3c"}}>
                        I'm a software engineer and developer based in Guatemala. I can make your ideas real.<br />
                        I also love reading, learning and making new friends.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
