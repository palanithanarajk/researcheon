import React from 'react';
import Card from './ui/Card';
import { SERVICES_LIST } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Our Services</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Comprehensive solutions to support every stage of your research publication process.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_LIST.map((service) => (
                        <Card key={service.title}>
                            <div className="p-4 bg-blue-100 rounded-full mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
