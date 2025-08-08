import React, { useState } from 'react';

const TitleGenerator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Sending abstract to backend:', inputText);
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ abstract: inputText }), // changed from prompt to abstract
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Received response from backend:', data);

      // Expecting data.titles as an array of strings
      if (data.titles && Array.isArray(data.titles)) {
        setGeneratedContent(data.titles.join('\n'));
      } else {
        setGeneratedContent('No titles generated');
      }
    } catch (err: any) {
      console.error('Error during API call:', err);
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <h2>Title Generator</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your research paper topic or keywords"
        rows={4}
        cols={50}
        style={{ width: '100%', marginBottom: 16 }}
      />
      <br />
      <button onClick={handleGenerate} disabled={loading || !inputText.trim()} style={{ padding: '10px 20px', fontSize: 16 }}>
        {loading ? 'Generating...' : 'Generate Title'}
      </button>
      {error && <p style={{ color: 'red', marginTop: 16 }}>Error: {error}</p>}
      {generatedContent && (
        <div style={{ marginTop: 24 }}>
          <h3>Generated Content:</h3>
          <div style={{ 
            whiteSpace: 'pre-wrap', 
            border: '1px solid #ccc', 
            padding: '10px', 
            borderRadius: '5px',
            backgroundColor: '#f9f9f9'
          }}>
            {generatedContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default TitleGenerator;
