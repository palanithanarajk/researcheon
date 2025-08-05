import React from 'react';
import type { Trend } from '../types';

interface TrendCardProps {
    trend: Trend;
}

const TrendCard: React.FC<TrendCardProps> = ({ trend }) => {
    return (
        <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
            <a href={`/?page=trend&id=${trend.id}`} className="block">
                <img src={trend.image} alt={trend.title} className="w-full h-48 object-cover" />
            </a>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                    <a href={`/?page=trend&id=${trend.id}`} className="hover:text-brand-secondary transition-colors">
                        {trend.title}
                    </a>
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">
                    {trend.snippet}
                </p>
                <a
                    href={`/?page=trend&id=${trend.id}`}
                    className="text-brand-secondary hover:underline font-semibold self-start mt-auto"
                >
                    Read Full Article
                </a>
            </div>
        </article>
    );
};

export default TrendCard;
