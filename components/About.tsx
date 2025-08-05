import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img
                        src="https://picsum.photos/600/400"
                        alt="Researchers collaborating"
                        className="rounded-lg shadow-xl"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">About Researcheon</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        At Researcheon, we understand the immense pressure and challenges that researchers face in the competitive world of academic publishing. Our mission is to be your trusted partner, providing the tools, expertise, and support needed to navigate this landscape successfully.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Founded by a team of experienced academics and publication experts, we are dedicated to upholding the highest standards of integrity and quality, helping you produce research that is not only published but also impactful and widely recognized.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
