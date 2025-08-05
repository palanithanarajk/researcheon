
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-dark text-white">
            <div className="container mx-auto px-6 py-8 text-center">
                <p>&copy; {currentYear} Researcheon.com. All Rights Reserved.</p>
                <p className="text-sm text-gray-400 mt-2">Your Partner in Research Excellence</p>
            </div>
        </footer>
    );
};

export default Footer;
