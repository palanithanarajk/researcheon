import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import torturedPhrasesCsv from '../tortured_phrases.csv?raw';
import Plot from 'react-plotly.js';

const MAX_WORDS = 500;

interface PhraseCount {
  phrase: string;
  count: number;
}

const TorturedPhrasesDetector: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [phraseCounts, setPhraseCounts] = useState<PhraseCount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [torturedPhrases, setTorturedPhrases] = useState<string[]>([]);

  useEffect(() => {
    // Parse CSV raw text
    Papa.parse(torturedPhrasesCsv, {
      header: true,
      complete: (results) => {
        const phrases = results.data
          .map((row: any) => row['Tortured Phrases'])
          .filter((p: string) => p && p.trim().length > 0);
        setTorturedPhrases(phrases);
      },
      error: () => {
        setError('Failed to load tortured phrases CSV');
      },
    });
  }, []);

  const countPhrases = (text: string, phrases: string[]) => {
    const counts: Record<string, number> = {};
    const lowerText = text.toLowerCase();
    phrases.forEach((phrase) => {
      const lowerPhrase = phrase.toLowerCase();
      let count = 0;
      let pos = 0;
      while ((pos = lowerText.indexOf(lowerPhrase, pos)) !== -1) {
        count++;
        pos += lowerPhrase.length;
      }
      if (count > 0) {
        counts[phrase] = count;
      }
    });
    return counts;
  };

  const handleDetect = () => {
    setError(null);
    if (!inputText.trim()) {
      setError('Please enter some text to check.');
      return;
    }
    const wordCount = inputText.trim().split(/\s+/).length;
    if (wordCount > MAX_WORDS) {
      setError(`Input exceeds maximum word limit of ${MAX_WORDS}.`);
      return;
    }
    setLoading(true);
    const counts = countPhrases(inputText, torturedPhrases);
    const countsArray = Object.entries(counts).map(([phrase, count]) => ({ phrase, count }));
    setPhraseCounts(countsArray);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Tortured Phrases Detector</h2>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows={8}
        placeholder="Enter your text here (max 500 words)..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="mb-2 text-sm text-gray-600">
        Word count: {inputText.trim().split(/\s+/).filter(Boolean).length} / {MAX_WORDS}
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleDetect}
        disabled={loading || !inputText.trim() || inputText.trim().split(/\s+/).length > MAX_WORDS}
      >
        {loading ? 'Detecting...' : 'Detect Tortured Phrases'}
      </button>

      {error && <div className="mt-4 text-red-600">{error}</div>}

      {phraseCounts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Detected Tortured Phrases</h3>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Phrase</th>
                <th className="border border-gray-300 px-4 py-2 text-right">Count</th>
              </tr>
            </thead>
            <tbody>
              {phraseCounts.map(({ phrase, count }, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-gray-300 px-4 py-2">{phrase}</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Word Cloud of Detected Phrases</h3>
            <Plot
              data={[
                {
                  type: 'bar',
                  x: phraseCounts.map((pc) => pc.phrase),
                  y: phraseCounts.map((pc) => pc.count),
                  marker: { color: 'rgb(0, 123, 255)' },
                },
              ]}
              layout={{
                width: 800,
                height: 400,
                title: 'Tortured Phrases Frequency',
                xaxis: { title: 'Phrase', tickangle: -45, automargin: true },
                yaxis: { title: 'Count' },
                margin: { b: 150 },
              }}
              config={{ responsive: true }}
            />
            <p className="mt-4 text-sm text-gray-600">
              Disclaimer: The tortured phrases are obtained from the Problematic Paper Screener (PPS). Some phrases indeed would be appropriate in certain contexts.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TorturedPhrasesDetector;
