import React, { useState } from 'react';

const DoiRetractionTracker: React.FC = () => {
  const [doi, setDoi] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isRetracted, setIsRetracted] = useState<boolean | null>(null);

  const handleCheck = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setIsRetracted(null);

    try {
      const response = await fetch('http://localhost:5000/api/check-pubpeer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doi }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.message) {
        setResult(data.message);
        setIsRetracted(data.hasComments === true);
      } else {
        setError('Unexpected response from server');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">DOI Retraction Tracker</h2>
      <input
        type="text"
        placeholder="Enter DOI here"
        value={doi}
        onChange={(e) => setDoi(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleCheck}
        disabled={loading || doi.trim() === ''}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Checking...' : 'Check Retraction'}
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {result && (
        <p
          className={`mt-4 font-semibold flex items-center gap-2 ${
            isRetracted ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {isRetracted ? '⚠️' : '✅'} {result}
        </p>
      )}
    </div>
  );
};

export default DoiRetractionTracker;
