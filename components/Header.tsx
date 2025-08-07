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
                <div className="hidden md:flex items-center space-x-4">
                    <a 
                        href="mailto:ask@researcheon.com" 
                        className="text-brand-dark hover:text-brand-secondary transition-colors duration-300 font-medium flex items-center space-x-1"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>ask@researcheon.com</span>
                    </a>
                </div>
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
                    <nav className="flex flex-col items-center py-4 space-y-3">
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
                        <a 
                            href="mailto:ask@researcheon.com" 
                            onClick={() => setIsMenuOpen(false)}
                            className="py-2 text-brand-dark hover:text-brand-secondary transition-colors duration-300 font-medium flex items-center space-x-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>ask@researcheon.com</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
