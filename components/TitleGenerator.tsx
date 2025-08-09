import React, { useState } from 'react';

const TitleGenerator: React.FC = () => {
    const [inputText, setInputText] = React.useState('');
    const [generatedContent, setGeneratedContent] = React.useState<string[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleGenerate = async () => {
        setLoading(true);
        setError(null);
        setGeneratedContent([]);

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
            if (data.titles && Array.isArray(data.titles)) {
                setGeneratedContent(data.titles);
            } else {
                setError('Invalid response format from server');
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const wordCount = inputText.trim().split(/\s+/).filter(Boolean).length;
    const isWordLimitExceeded = wordCount > 500;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Research Paper Title Generator (Limit: 500 words)</h2>
            <textarea
                className="w-full h-40 p-2 border border-gray-300 rounded mb-1"
                placeholder="Enter your research paper abstract here..."
                value={inputText}
                onChange={handleInputChange}
            />
            <p className={`text-sm mb-4 ${isWordLimitExceeded ? 'text-red-600' : 'text-gray-600'}`}>{wordCount} / 500 words</p>
            {isWordLimitExceeded && <p className="text-red-600 mb-4">Word limit exceeded. Please reduce your abstract to 500 words or less.</p>}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                onClick={handleGenerate}
                disabled={loading || inputText.trim() === '' || isWordLimitExceeded}
            >
                {loading ? 'Generating...' : 'Generate Titles'}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {generatedContent.length > 0 && (
                <table className="table-auto w-full mt-6 border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Generated Titles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generatedContent.slice(0, 5).map((title, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TitleGenerator;
