import React from 'react';
import { TRENDS_DATA } from '../constants';
import CommentSection from './CommentSection';
import MarkdownContent from './MarkdownContent';
import SubscriptionForm from './SubscriptionForm';

interface TrendDetailPageProps {
    trendId: string;
}

const TrendDetailPage: React.FC<TrendDetailPageProps> = ({ trendId }) => {
    const trend = TRENDS_DATA.find(t => t.id.toString() === trendId);

    if (!trend) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-brand-dark">Trend not found</h1>
                <p className="text-gray-600 mt-4">The article you are looking for does not exist.</p>
                <a href="/" className="text-brand-secondary hover:underline mt-8 inline-block">Return to Home</a>
            </div>
        );
    }

    return (
        <article className="bg-white">
            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-500 mb-6">
                        Published on {new Date(trend.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <img src={trend.image} alt={trend.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" />
                    
                    {/* Use MarkdownContent component instead of plain text */}
                    <div className="prose prose-lg max-w-none">
                        <MarkdownContent contentPath={trend.contentPath} />
                    </div>

                    {/* Subscription Form */}
                    <div className="mt-12 mb-8">
                        <SubscriptionForm />
                    </div>

                    <CommentSection trendId={trend.id} />
                </div>
            </div>
        </article>
    );
};

export default TrendDetailPage;
