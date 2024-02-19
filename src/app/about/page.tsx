import React from 'react'
import Image from 'next/image'
import me from '../../../public/images/me.jpg'

const About: React.FC = () => {
    return (
        <div className='container'>
            <div className="about flex flex-col justify-center">
                <header className='text-5xl text-center robotoslab-font'>
                    Hey there!
                </header>
                <div className="about-header flex py-10">
                    <div className="about-photo px-10">
                        <Image src={me} alt="A picture of myself from 2021" width={500} />
                    </div>
                    <div className="about-lead-intro flex flex-col justify-center p-10 text-2xl robotoslab-font">
                        <p className='py-2'>Im Roberto, a fulltack developer based in El Caman, Guatemala</p>
                        <p className='py-2'>I've been studying web and mobile development for at least 5 years working
                            for several clients and companies across various industries.
                        </p>
                        <p className='py-2'>
                            My focus is on creating engaging, accessible & performant interfaces for humans.
                        </p>
                    </div>
                </div>
                <div className="about-content-markdown flex flex-col justify-center items-center">
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Work</h1>
                        <p>I'm currently working as a senior web developer at IXL Center, Inc. a worldwide consulting firm based in Boston, MA, USA.</p>
                        <p>We work with clients around the world, thats why English has become my first language now</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Studing</h1>
                        <p>I'm currently working as a senior web developer at IXL Center, Inc. a worldwide consulting firm based in Boston, MA, USA.</p>
                        <p>We work with clients around the world, thats why English has become my first language now</p>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>School</h1>
                        <p>I'm currently working as a senior web developer at IXL Center, Inc. a worldwide consulting firm based in Boston, MA, USA.</p>
                        <p>We work with clients around the world, thats why English has become my first language now</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About