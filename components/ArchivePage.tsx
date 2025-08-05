import React, { useState } from 'react';
import { TRENDS_DATA } from '../constants';
import type { Trend } from '../types';
import TrendCard from './TrendCard';

interface GroupedTrends {
    [year: string]: {
        [month: string]: Trend[];
    };
}

const ArchivePage: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    
    const groupedTrends = TRENDS_DATA
        .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
        .reduce((acc, trend) => {
            const date = new Date(trend.publishDate);
            const year = date.getFullYear().toString();
            const month = date.toLocaleString('en-US', { month: 'long' });

            if (!acc[year]) {
                acc[year] = {};
            }
            if (!acc[year][month]) {
                acc[year][month] = [];
            }
            acc[year][month].push(trend);
            return acc;
        }, {} as GroupedTrends);

    const years = Object.keys(groupedTrends).sort((a, b) => parseInt(b) - parseInt(a));
    
    // If no year is selected, show all years
    const displayYears = selectedYear ? [selectedYear] : years;

    return (
        <div className="bg-brand-light min-h-full">
            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">Article Archive</h1>
                        <p className="text-lg text-gray-600 mt-2">Browse all our published articles by date.</p>
                    </div>

                    {/* Year Tabs */}
                    <div className="mb-12">
                        <div className="flex flex-wrap gap-2 justify-center">
                            <button
                                onClick={() => setSelectedYear(null)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    selectedYear === null
                                        ? 'bg-brand-primary text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                All Years
                            </button>
                            {years.map(year => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                        selectedYear === year
                                            ? 'bg-brand-primary text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Display trends for selected year(s) */}
                    {displayYears.map(year => (
                        <section key={year} className="mb-12">
                            <h2 className="text-3xl font-bold text-brand-dark border-b-2 border-brand-primary pb-2 mb-8">{year}</h2>
                            {Object.keys(groupedTrends[year]).map(month => (
                                <div key={month} className="mb-8">
                                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">{month}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {groupedTrends[year][month].map(trend => (
                                            <TrendCard key={trend.id} trend={trend} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchivePage;
