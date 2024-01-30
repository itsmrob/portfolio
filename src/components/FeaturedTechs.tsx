import React from 'react';
import Image from 'next/image';
import { TechStack } from '../types/TechStack';

interface FeaturedTechStack {
    technologyStack: TechStack[]
}

const FeaturedTechs: React.FC<FeaturedTechStack> = ({ technologyStack }) => {
    return (
        <div className='p-8 bg-base-200'>
            <h2 className="text-2xl text-black font-bold mb-6">My technology stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {technologyStack.map((technology) => (
                    <div key={technology.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                        <Image src="" alt={technology.title} width={350} height={200} objectFit="cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedTechs