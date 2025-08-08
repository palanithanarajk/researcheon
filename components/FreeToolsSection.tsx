import React from 'react';

const FreeToolsSection: React.FC = () => {
  return (
    <section id="free-tools" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Free Research Tools</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Boost your research with our free, easy-to-use tools.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="?page=title-generator" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Title Generator from Abstract</h3>
            <p className="text-gray-600">Generate a research title from your abstract and keywords. (Limit: 500 words)</p>
          </a>
          <div className="block bg-white rounded-lg shadow-md p-6 opacity-50 cursor-not-allowed">
            <h3 className="text-xl font-bold mb-2">DOI Retraction Checker</h3>
            <p className="text-gray-600">Check if a DOI is retracted using free APIs. (Coming soon)</p>
          </div>
          <div className="block bg-white rounded-lg shadow-md p-6 opacity-50 cursor-not-allowed">
            <h3 className="text-xl font-bold mb-2">Tortured Phrases Detector</h3>
            <p className="text-gray-600">Detect tortured phrases in your content. (Coming soon)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeToolsSection;
