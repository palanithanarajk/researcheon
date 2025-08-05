import React, { useState } from 'react';
import type { Comment } from '../types';
import Button from './ui/Button';

const CommentSection: React.FC<{ trendId: number | string }> = ({ trendId }) => {
    // In a real app, comments would be fetched and persisted.
    // For this demo, we'll store them in state.
    const [comments, setComments] = useState<Comment[]>([]);
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !text.trim()) {
            setError('Email and comment fields cannot be empty.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        const newComment: Comment = {
            email,
            text,
            date: new Date().toLocaleString('en-US'),
        };
        setComments(prevComments => [newComment, ...prevComments]);
        setEmail('');
        setText('');
        setError('');
    };

    return (
        <div className="mt-12 border-t border-gray-300 pt-8">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Comments ({comments.length})</h3>

            <div className="space-y-6 mb-8">
                {comments.length > 0 ? (
                     <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {comments.map((comment, index) => (
                            <div key={index} className="bg-brand-light p-4 rounded-lg">
                                <p className="text-gray-800">{comment.text}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    By <span className="font-semibold">{comment.email}</span> on {comment.date}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 bg-brand-light p-4 rounded-lg">Be the first to comment.</p>
                )}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <form onSubmit={handleCommentSubmit} className="space-y-4" aria-label="Leave a Comment">
                    <h4 className="text-xl font-semibold text-brand-dark">Leave a Comment</h4>
                    {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
                    <div>
                        <label htmlFor={`email-${trendId}`} className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id={`email-${trendId}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your registered email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary"
                        />
                    </div>
                    <div>
                        <label htmlFor={`comment-${trendId}`} className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                        <textarea
                            id={`comment-${trendId}`}
                            rows={4}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Write your comment here..."
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-secondary focus:border-brand-secondary"
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <Button type="submit" variant="primary">Post Comment</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentSection;