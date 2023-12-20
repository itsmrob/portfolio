import React from 'react';
import { NAV_LINKS } from '@/constants';
import GithubLogo from '@/images/github-mark.png';
import EmailLogo from '@/images/email.png';
import DownloadCVLogo from '@/images/cv.png'
import Link from 'next/link';
import Image from 'next/image';

import HeaderStyles from '../../styles/Header.module.css';

const Nav: React.FC = () => {
    return (
        <header className="py-5 relative z-50">
            <div className='max-w-[60rem] mx-auto px-4 relative'>
                <div className='flex items-center justify-between'>
                    <div className="text-xl font-bold" style={{ fontFamily: 'Roboto' }}>{`Roberto Lopez  👨🏻‍💻`}</div>
                    <nav>
                        <ul className="flex justify-center items-center space-x-10">
                            {NAV_LINKS.map((link) => (
                                <li key={link.key} className=''>
                                    <Link href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <div className="h-7 w-px bg-black"></div>
                            <li className=''>
                                <a href="https://github.com" className="hover:text-blue-500" rel="noopener noreferrer">
                                    <Image src={GithubLogo} alt='Check out my GitHub Repository' width={30} height={30} />
                                </a>
                            </li>
                            <li className=''>
                                <a href="#" className="hover:text-blue-500">
                                    <Image src={DownloadCVLogo} alt='Download updated CV' width={35} height={35} />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Nav;
