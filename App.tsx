import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TrendDetailPage from './components/TrendDetailPage';
import ArchivePage from './components/ArchivePage';
import TitleGenerator from './components/TitleGenerator';
import DoiRetractionTracker from './components/DoiRetractionTracker';
import TorturedPhrasesDetector from './components/TorturedPhrasesDetector';

const App: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const page = searchParams.get('page');
  const id = searchParams.get('id');

  const renderContent = () => {
    switch (page) {
      case 'title-generator':
        return <TitleGenerator />;
      case 'trend':
        return id ? <TrendDetailPage trendId={id} /> : <ArchivePage />;
      case 'archive':
        return <ArchivePage />;
      case 'doi-retraction-tracker':
        return <DoiRetractionTracker />;
      case 'tortured-phrases-detector':
        return <TorturedPhrasesDetector />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
