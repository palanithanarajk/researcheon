import React, { useState } from 'react';
import Button from './ui/Button';
import { ContactFormData, FormStatus } from '../types';
import { handleFormSubmit, FormData } from '../src/utils/formHandlers';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name.trim()) {
            setError('Please enter your name');
            return;
        }
        
        if (!formData.email.trim()) {
            setError('Please enter your email');
            return;
        }
        
        if (!formData.subject.trim()) {
            setError('Please enter a subject');
            return;
        }
        
        if (!formData.message.trim()) {
            setError('Please enter your message');
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }
        
        setStatus(FormStatus.Loading);
        setError('');

        try {
            // Submit to Google Sheets
            const googleFormData: FormData = {
                name: formData.name,
                email: formData.email,
                message: `Subject: ${formData.subject}\n\n${formData.message}`,
                formType: 'contact'
            };

            await handleFormSubmit(googleFormData);

            console.log('Form data submitted to Google Sheets:', formData);
            setStatus(FormStatus.Success);
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            // Reset status after 3 seconds
            setTimeout(() => setStatus(FormStatus.Idle), 3000);
        } catch (err) {
            setError('Failed to send message. Please try again.');
            setStatus(FormStatus.Error);
        }
    };

    return (
        <section id="contact" className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Contact Us</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Fill out the form below to get in touch.</p>
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed" 
                                    disabled={status === FormStatus.Loading}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed" 
                                    disabled={status === FormStatus.Loading}
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                id="subject" 
                                required 
                                value={formData.subject} 
                                onChange={handleChange} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed" 
                                disabled={status === FormStatus.Loading}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                required 
                                value={formData.message} 
                                onChange={handleChange} 
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary resize-none disabled:opacity-50 disabled:cursor-not-allowed" 
                                disabled={status === FormStatus.Loading}
                            />
                        </div>
                        
                        {error && (
                            <div className="text-red-600 text-sm text-center">{error}</div>
                        )}
                        
                        <div className="text-center">
                            <Button 
                                type="submit" 
                                disabled={status === FormStatus.Loading}
                                className="px-8 py-3"
                            >
                                {status === FormStatus.Loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>
                        
                        {status === FormStatus.Success && (
                            <div className="text-green-600 text-sm text-center">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}
                        
                        {status === FormStatus.Error && (
                            <div className="text-red-600 text-sm text-center">
                                Failed to send message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
