import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-brand-primary cursor-pointer">
                    Researcheon
                </a>
                <nav className="hidden md:flex space-x-8">
                    {NAV_LINKS.map((link: NavLink) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-brand-dark hover:text-brand-secondary transition-colors duration-300 font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center py-4">
                        {NAV_LINKS.map((link: NavLink) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="py-2 text-brand-dark hover:text-brand-secondary transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
