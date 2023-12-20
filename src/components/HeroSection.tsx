import React from 'react';
import Image from 'next/image';
import profilePic from '@/images/myself.jpg'; // Replace with the path to your image

const HeroSection: React.FC = () => {
    return (
        <section className="text-black p-8 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                    <h1 className="text-5xl font-bold mb-4">¡Hola!, soy Roberto.</h1>
                    <p className="mb-2">
                        Soy un <em>ingeniero de software</em> que le apasiona diseñar<br />
                        construir y desarrollar soluciones mediante tecnologias web y móviles.<br />
                        Actualmente enfocado en el desarrollo y diseño de productos digitales innovadores.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-sm">
                            Soy muy bueno en lo que hago, asi que puedo aportar mucho para tu empresa y proyectos.
                        </p>
                        <p className="text-sm">
                            A lo largo de mi carrera, he aprendido a aprender eficientemente, por lo que siempre <br />
                            estoy a la vanguardia de la tecnologia.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-48 h-48">
                        <Image
                            src={profilePic}
                            alt="Frontend Developer"
                            layout="fill"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
