/* eslint-disable @next/next/no-img-element */

const Header = () => {
    return (
        <header className="bg-slate-900">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white font-semibold text-lg">
                        Mi Aplicación
                    </span>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="menu-toggle"
                        className="hidden"
                    />
                    <label
                        htmlFor="menu-toggle"
                        className="cursor-pointer md:hidden">
                        <svg
                            className="fill-current text-white h-6 w-6"
                            viewBox="0 0 20 20">
                            <path
                                d="M3 6h14M3 10h14M3 14h14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </label>
                    <nav className="hidden md:flex md:ml-4">
                        <ul className="flex items-center space-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300">
                                    My Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300">
                                    My Shell
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300">
                                    My Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
