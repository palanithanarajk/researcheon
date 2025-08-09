import React from 'react';
import { TRENDS_DATA } from '../constants';
import TrendCard from './TrendCard';

const Trends: React.FC = () => {
    return (
        <section id="trends" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">Latest Trends in Research</h2>
                    <p className="text-lg text-brand-dark mt-2 max-w-2xl mx-auto">Stay informed about the evolving landscape of academic publishing and research.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {TRENDS_DATA.slice(0, 4).map((trend) => (
                        <TrendCard key={trend.id} trend={trend} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trends;
