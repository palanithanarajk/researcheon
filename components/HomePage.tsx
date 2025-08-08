import React, { useEffect } from 'react';
import Hero from './Hero';
import FreeToolsSection from './FreeToolsSection';
import Services from './Services';
import SubscriptionForm from './SubscriptionForm';
import About from './About';
import Trends from './Trends';
import ContactForm from './ContactForm';

const HomePage: React.FC = () => {
    useEffect(() => {
        // Handles navigating from other pages to a section on the home page
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            setTimeout(() => { // Timeout ensures the component has rendered
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    const handleNavigateToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero onNavigate={handleNavigateToServices} />
            <Services />
            <FreeToolsSection />
            <SubscriptionForm />
            <About />
            <Trends />
            <ContactForm />
        </>
    );
};

export default HomePage;
