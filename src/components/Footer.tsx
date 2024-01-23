import React from 'react';
import Image from 'next/image';

import GithubLogo from '@/images/github-mark.png';
import EmailLogo from '@/images/email.png';
import XLogo from '@/images/gorjeo.png';
import IGLogo from '@/images/instagram.png';
import LinkedinLogo from '@/images/linkedin.png';
import profilePic from '@/images/me.jpg';

import { FOOTER_LINKS } from '@/constants';

const Footer: React.FC = () => {
    const [about, tools, contact] = FOOTER_LINKS;
    return (
        <footer className="w-full bg-gray-100 py-4 px-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src={profilePic} // Replace with your actual profile image path
                        alt="Profile picture"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="ml-4 text-sm">
                        © Desde el 2018
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                        <Image src={XLogo} alt='Check out my GitHub Repository' width={30} height={30} />
                    </a>
                    <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubLogo} alt='Check out my GitHub Repository' width={30} height={30} />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <Image src={IGLogo} alt='Check out my GitHub Repository' width={30} height={30} />
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinLogo} alt='Check out my GitHub Repository' width={30} height={30} />
                    </a>
                    <a href="mailto:email@example.com" aria-label="Email">
                        <Image src={EmailLogo} alt='Check out my GitHub Repository' width={30} height={30} />
                    </a>
                </div>
                <div className="text-sm">
                    <a href={about.href} className="hover:underline">{about.label}</a>
                    <span className="mx-2">·</span>
                    <a href={tools.href} className="hover:underline">{tools.label}</a>
                    <span className="mx-2">·</span>
                    <a href={contact.href} className="hover:underline">{contact.label}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
