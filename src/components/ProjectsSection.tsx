'use client'
import React from 'react';
import Card from './Card';

import { projects } from '@/constants/Projects';

const ProjectsSection = () => {
    return (
        <div>
            <h4>Projects I've working on</h4>
            <div className='flex justify-center lg:justify-start gap-5 flex-wrap'>
                {projects.map((currentProject) => (
                    <div key={currentProject.id}>
                        <Card
                            title={currentProject.name}
                            subtitle={currentProject.description}
                            imageSrc={currentProject.imageUrl}
                            imageAlt={currentProject.name}
                            buttonText='Learn more ->'
                            buttonStyle='btn btn-primary'
                            onClick={() => console.log('clicking project')}
                        />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ProjectsSection;