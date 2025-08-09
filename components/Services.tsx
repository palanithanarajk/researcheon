import React from 'react';
import Card from './ui/Card';
import { SERVICES_LIST } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive solutions to support every stage of your research publication process.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_LIST.map((service, index) => (
                        <div key={service.title} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1">
                            <div className={`flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto shadow-lg ${
                                index % 6 === 0 ? 'bg-blue-100 text-blue-600' :
                                index % 6 === 1 ? 'bg-green-100 text-green-600' :
                                index % 6 === 2 ? 'bg-purple-100 text-purple-600' :
                                index % 6 === 3 ? 'bg-orange-100 text-orange-600' :
                                index % 6 === 4 ? 'bg-red-100 text-red-600' :
                                'bg-indigo-100 text-indigo-600'
                            }`}>
                                <div className="transform scale-110">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-center text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
