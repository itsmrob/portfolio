'use client';

import React, { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import profilePic from '../../public/images/me.jpg';
import cvLogo from '@/images/cv.png'
import Link from 'next/link';
import Image from 'next/image';


const Nav: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activePath = '/';

    console.log(isMenuOpen)

    return (
        <header className="flex justify-between items-center bg-white relative mt-10">
            <div className="flex items-center space-x-3">
                <Image src={profilePic} alt="Profile" width={40} height={40} className="rounded-full" />
                <span className="font-semibold text-black">Robb Lopez</span>
                <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">✓</span>
            </div>
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-gray-800 hover:bg-gray-200"
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <nav className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white shadow-md lg:shadow-none`}>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} className={`${isMenuOpen ? 'text-white' : 'text-gray-600'} hover:text-gray-800 font-medium px-4 py-2 rounded-lg ${link.href === activePath ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
                        {link.label}
                    </Link>
                ))}
                <button
                    className="p-1 rounded-md bg-gray-200 hover:bg-gray-300"
                    onClick={() => alert('Downloading CV')}
                >
                    <Image src={cvLogo} alt="Resume" width={30} height={30} className="rounded-full" />
                </button>
            </nav>

        </header>
    );
};

export default Nav;
