import React, { Fragment } from 'react';
import Image from 'next/image';

import { FOOTER_LINKS, FOOTER_SOCIAL } from '@/constants';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="pt-6 pb-10">
            <div className='w-full border-t border-amber-950/10 pb-5'></div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center">
                <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 items-center'>
                    <div className='hidden md:block relative overflow-hidden rounded-full'>
                        <Image
                            src="/images/me.jpg"
                            alt="Profile picture"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="flex flex-col items-center md:items-start ">
                        <span className="ml-4 text-sm robotoslab-font"> © Since 2018 </span>
                        <div className='flex space-x-2 items-center'>
                            <span className='ml-4 text-sm robotoslab-font'> Made in Guate! 🇬🇹</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 items-center'>
                    <div className="flex space-x-4 items-center ">
                        {
                            FOOTER_LINKS.map((link) => (
                                <Link href={link.href} key={link.key} className='hover:underline robotoslab-font'>
                                    {link.label}
                                </Link>
                            ))
                        }
                    </div>
                    <div className='hidden md:block rounded-full w-1 h-1 bg-slate-400'></div>
                    <div className="flex space-x-3 items-center ">
                        {
                            FOOTER_SOCIAL.map((link) => (
                                <div className='relative' key={link.key}>
                                    <Link href={link.href} aria-label={link.label} target='_blank' rel='noopener noreferrer"'>
                                        {link.iconComponent && <link.iconComponent />}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
