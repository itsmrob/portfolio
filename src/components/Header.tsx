import React from 'react';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

interface HeaderProps {
    // Aquí puedes añadir propiedades para configurar el header
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className="flex justify-between items-center p-4 bg-black shadow-md pr-20 pl-20">
            <div className="text-xl font-bold">{`Roberto Lopez </>`}</div>
            <nav>
                <ul className="flex space-x-4">
                    {
                        NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} className="hover:text-blue-600">
                                {link.label}
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;
