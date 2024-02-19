import React from 'react';
import Image from 'next/image';
import { TechStack } from '@/types/TechStack';

interface TechSectionProps {
    technologies: TechStack[]
}

const TechSection: React.FC<TechSectionProps> = ({ technologies }) => {
    return (
        <section className='container mx-auto p-6 bg-gray-50 py-20'>
            <h2 className="text-3xl font-bold text-center mb-4 ">My Tech Stack</h2>
            <p className="text-gray-600 text-center mb-6 text-2xl">Technologies I've been working with recently</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center mt-5 p-5" >
                {technologies.map((tech) => (
                    <div key={tech.id} className="flex flex-col items-center">
                        <Image src={`/images/techstack${tech.imageUrl}`} alt={tech.description} className="mb-2" width={80} height={80} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechSection;