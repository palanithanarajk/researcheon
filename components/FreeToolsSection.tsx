import React from 'react';
import { FaFileAlt, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

const FreeToolsSection: React.FC = () => {
  return (
    <section id="free-tools" className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-12">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Free Research Tools</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto text-center">
          Explore our free tools designed to assist researchers in various aspects of their work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="?page=title-generator"
            className="block p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
          >
            <div className="p-5 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-6 w-max mx-auto shadow-lg text-white">
              <FaFileAlt size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Title Generator from Abstract</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Generate research paper titles based on your abstract.
            </p>
          </a>
          <a
            href="?page=doi-retraction-tracker"
            className="block p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
          >
            <div className="p-5 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 w-max mx-auto shadow-lg text-white">
              <FaSearch size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">DOI Retraction Tracker</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Check the retraction status of publications using their DOI.
            </p>
          </a>
          <a
            href="?page=tortured-phrases-detector"
            className="block p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
          >
            <div className="p-5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 w-max mx-auto shadow-lg text-white">
              <FaExclamationTriangle size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Tortured Phrases Detector</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Detect tortured phrases in your text to improve clarity and quality.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeToolsSection;
