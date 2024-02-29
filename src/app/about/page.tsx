import React from 'react'
import Image from 'next/image'
import InfoCard from '@/components/InfoCard/InfoCard'
import meInTheLake from '../../../public/images/lake.jpg';

const aboutMe = [
    {
        id: 1,
        title: "Work",
        titleClass: "font-bold robotoslab-font text-2xl pt-4",
        content: [
            "I'm currently working as a senior web developer at IXL Center, Inc. a worldwide consulting firm based in Boston, MA, USA.",
            "We work with clients around the world, thats why English has became my first language now."
        ],
        contentClass: "robotoslab-font py-2 font-light"
    },
    {
        id: 2,
        title: "Studing",
        titleClass: "font-bold robotoslab-font text-2xl pt-4",
        content: [
            "I love learning and expanding my current skills related to software engineering and artificial intelligence.",
            "I also love other topics which are not related to engineering such as music production and business."
        ],
        contentClass: "robotoslab-font py-2"
    },
    {
        id: 3,
        title: "Offline",
        titleClass: "font-bold robotoslab-font text-2xl pt-4",
        content: [
            "When I'm not coding or something, I really enjoy traveling and discovering towns around me.",
            "I love the beach and swimming."
        ],
        contentClass: "robotoslab-font py-2"
    }
]

const About: React.FC = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className="flex flex-col justify-center items-center lg:flex lg:flex-col">
                <header className='text-5xl text-center robotoslab-font'>
                    Hey there!
                </header>
                <div className="flex flex-col lg:flex-row py-10">
                    <div className="w-full lg:w-1/2 px-4 lg:px-10 mb-4 lg:mb-0 flex justify-center items-center">
                        <Image src={meInTheLake} alt="A picture of myself from 2021" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 text-2xl robotoslab-font">
                        <p className='py-2'>I'm Roberto, a full stack developer based in El Caman, Guatemala</p>
                        <p className='py-2'>I've been studying web and mobile development for at least 5 years working
                            for several clients and companies across various industries.
                        </p>
                        <p className='py-2'>
                            My focus is on creating engaging, accessible & performant interfaces for humans.
                        </p>
                    </div>
                </div>

                <div className="about-content-markdown flex flex-col justify-center items-center">
                    <h1 className='text-3xl robotoslab-font'>More about me</h1>
                    <div className='flex flex-col px-10'>
                        {aboutMe.map((card) => <InfoCard key={card.id} {...card} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About