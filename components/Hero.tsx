import React from 'react';
import Button from './ui/Button';

interface HeroProps {
    onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
    return (
        <section
            className="relative bg-cover bg-center text-white"
            style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}
        >
            <div className="absolute inset-0 bg-brand-primary opacity-80"></div>
            <div className="relative container mx-auto px-6 py-16 text-center">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                    Empowering Your Research Journey
                </h1>
                <p className="text-base md:text-lg mb-6 text-blue-200 max-w-3xl mx-auto">
                    From manuscript polishing to grant proposals, Researcheon provides the expert support you need to publish with confidence and impact.
                </p>
                <Button onClick={onNavigate} variant="secondary">
                    Explore Our Services
                </Button>
            </div>
        </section>
    );
};

export default Hero;
