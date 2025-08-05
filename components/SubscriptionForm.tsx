import React, { useState } from 'react';

interface SubscriptionFormProps {
    onSubscribe?: (email: string, name: string) => void;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ onSubscribe }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!name.trim()) {
            setError('Please enter your name');
            return;
        }
        
        if (!email.trim()) {
            setError('Please enter your email');
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        
        setStatus('loading');
        setError('');
        
        try {
            // API call to save to CSV
            const apiUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3001/api/subscribe' : '/api/subscribe';
            await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });
            
            setStatus('success');
            setName('');
            setEmail('');
            
            if (onSubscribe) {
                onSubscribe(email, name);
            }
            
            // Reset status after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        } catch (err) {
            setError('Failed to subscribe. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-dark mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Get the latest research insights and updates delivered to your inbox.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        disabled={status === 'loading'}
                    />
                </div>
                
                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        disabled={status === 'loading'}
                    />
                </div>
                
                {error && (
                    <div className="text-red-600 text-sm">{error}</div>
                )}
                
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-brand-primary text-white py-2 px-4 rounded-lg hover:bg-brand-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
                
                {status === 'success' && (
                    <div className="text-green-600 text-sm text-center">
                        Thank you for subscribing! Check your email for confirmation.
                    </div>
                )}
            </form>
        </div>
    );
};

export default SubscriptionForm;
