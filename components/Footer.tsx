import React from 'react';
import { TRENDS_DATA } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const recentArticles = TRENDS_DATA.slice(0, 4); // Get 4 most recent articles

    return (
        <footer className="bg-brand-dark text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Featured Content */}
                    <div>
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                            <h3 className="text-lg font-semibold">Featured Content</h3>
                        </div>
                        <ul className="space-y-2">
                            {recentArticles.map(article => {
                                const maxLength = 30; // max length of title to display
                                const shortTitle = article.title.length > maxLength ? article.title.slice(0, maxLength) + '...' : article.title;
                                return (
                                    <li key={article.id}>
                                        <a 
                                            href={`/?page=trend&id=${article.id}`}
                                            className="text-gray-300 hover:text-white transition"
                                            title={article.title} // full title on hover
                                        >
                                            {shortTitle}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    
                    {/* About */}
                    <div>
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-lg font-semibold">About</h3>
                        </div>
                        <p className="text-gray-300">
                            Your Partner in Research Excellence
                        </p>
                    </div>
                    
                    {/* Support */}
                    <div>
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <h3 className="text-lg font-semibold">Support</h3>
                        </div>
                        <p className="text-gray-300 mb-2">
                            For any support inquiries, please contact us:
                        </p>
                        <a 
                            href="mailto:ask@researcheon.com" 
                            className="text-brand-secondary hover:text-white transition flex items-center space-x-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>ask@researcheon.com</span>
                        </a>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <h3 className="text-lg font-semibold">Legal</h3>
                        </div>
                        <p className="text-gray-300 mb-2">
                            <strong>Privacy:</strong> Your data is used solely for research news delivery.
                        </p>
                        <p className="text-gray-300">
                            <strong>Terms:</strong> By subscribing, you agree to receive updates.
                        </p>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {currentYear} Researcheon.com. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
