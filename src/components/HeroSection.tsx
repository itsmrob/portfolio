import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="flex w-full">
            <div className="w-3/4">
                <h2 className="text-lg font-semibold" style={{ color: "#ff335f" }}>HELLO, MY NAME IS ROB </h2>
                <div className="flex flex-col  ">
                    <h1 className="text-7xl font-bol opacity-50" style={{ color: "#373a3c" }}>I make websites and mobile apps.</h1>
                    <p className="mt-4" style={{ color: "#373a3c" }}>
                        I'm a software engineer and developer based in Guatemala. I can make your ideas real.<br />
                        I also love reading, learning and making new friends.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
