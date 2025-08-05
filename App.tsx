import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TrendDetailPage from './components/TrendDetailPage';
import ArchivePage from './components/ArchivePage';

const App: React.FC = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get('page');
    const id = searchParams.get('id');

    const renderContent = () => {
        if (page === 'trend' && id) {
            return <TrendDetailPage trendId={id} />;
        }
        if (page === 'archive') {
            return <ArchivePage />;
        }
        return <HomePage />;
    };

    return (
        <div className="bg-brand-light font-sans text-brand-dark min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
