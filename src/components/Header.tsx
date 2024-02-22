'use client';

import React, { DOMElement, useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { NAV_LINKS } from '@/constants';
import profilePic from '../../public/images/me.jpg';
import cvLogo from '@/images/cv.png'
import Link from 'next/link';
import Image from 'next/image';

import DownloadButton from './DownloadButton/DownloadButton';
import ThemeButton from './ThemeButton/ThemeButton';

const Nav: React.FC = () => {
    const downloadCVUrl = "/files/EN_REAL_CV_2024.pdf";

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
    }, [pathname]);

    return (
        <header className="flex justify-between align-middle max-container padding-container relative py-2 sm:py-12">
            <Link href="/">
                <div className="flex items-center space-x-4">
                    <Image src={profilePic} alt="Profile" width={40} height={40} className="rounded-full" />
                    <span className="font-semibold robotoslab-font">Roberto Lopez</span>
                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">✓</span>
                </div>
            </Link>
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-gray-800 hover:bg-gray-200"
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-9 h-9"
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
            <nav className={`flex ${isMenuOpen ? 'bg-accent-content text-white py-2 z-10' : 'hidden '} flex-col lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto lg:shadow-none py-2`}>
                {NAV_LINKS.map((link) => (
                    <Link key={link.key} href={link.href} className={`flex ${isMenuOpen ? 'py-2' : ''} items-center mx-1 hover:bg-gray-300 font-medium px-4 rounded-lg robotoslab-font ${link.href === pathname ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}>
                        {link.label}
                    </Link>
                ))}
                <DownloadButton
                    downloadText='Download CV'
                    downloadName='EN_REAL_CV.pdf'
                    href={downloadCVUrl}
                />
                {isMenuOpen && (<ThemeButton />)}
            </nav>

        </header>
    );
};

export default Nav;
