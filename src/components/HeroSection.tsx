import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className='container lg:mx-auto py-12'>
            <div className="flex flex-col gap-4">
                <div className="w-3/4">
                    <h2 className="text-lg font-semibold" style={{ color: "#ff335f" }}>HELLO, MY NAME IS ROB </h2>
                </div>
                <div className="flex flex-col  ">
                    <h1 className="text-4xl sm:text-7xl font-bold opacity-50" style={{ color: "#373a3c" }}>I build websites and mobile apps.</h1>
                    <p className="text-xl sm:text-3xl mt-4" style={{ color: "#373a3c" }}>
                        I'm a software engineer and developer based in Guatemala. I can make your ideas real.<br />
                        I also love reading, learning and making new friends.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
