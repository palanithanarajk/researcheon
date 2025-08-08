import React, { useState } from 'react';

const TitleGenerator: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:5000/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ abstract: inputText }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setGeneratedContent(data.titles.join('\n\n'));
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 flex flex-col justify-center items-center px-6">
            <div className="max-w-3xl w-full bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">Research Paper Title Generator</h1>
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your research paper abstract here..."
                    className="w-full p-4 mb-6 border border-gray-300 rounded resize-none h-40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    onClick={handleGenerate}
                    disabled={loading || !inputText.trim()}
                    className="w-full py-3 text-lg font-semibold bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
                >
                    {loading ? 'Generating...' : 'Generate Titles'}
                </button>
                {error && <p className="text-red-600 mt-4 text-center">Error: {error}</p>}
                {generatedContent && (
                    <div className="mt-8 whitespace-pre-wrap bg-gray-100 p-4 rounded shadow text-gray-900">
                        {generatedContent}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TitleGenerator;
