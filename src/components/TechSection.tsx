import React from 'react';
import Image from 'next/image';
import { TechStack } from '@/types/TechStack';

interface TechSectionProps {
    technologies: TechStack[]
}

const TechSection: React.FC<TechSectionProps> = ({ technologies }) => {
    return (
        <section className='container mx-auto p-6py-20'>
            <h2 className="text-3xl font-bold mb-4 robotoslab-font">Tech Stack</h2>
            <p className="mb-6 text-2xl publicsans-font">Technologies I've been working with recently</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mt-5 p-5" >
                {technologies.map((tech) => (
                    <div key={tech.id} className="flex flex-col items-center p-5">
                        <Image src={`/images/techstack${tech.imageUrl}`} alt={tech.description} className="mb-2" width={80} height={80} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechSection;