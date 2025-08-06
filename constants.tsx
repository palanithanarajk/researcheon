import React from 'react';
import type { Service, Trend, NavLink } from './types';

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
);

const ParaphraseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 15l3 3m0 0l3-3m-3 3v-4" />
    </svg>
);

const JournalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m0 0a7.5 7.5 0 007.5-7.5H4.5a7.5 7.5 0 007.5 7.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 21h-6a2 2 0 01-2-2V5a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2z" />
    </svg>
);

const GrantIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Trends', href: '/#trends' },
    { name: 'Archive', href: '/?page=archive' },
    { name: 'Contact', href: '/#contact' },
];

export const SERVICES_LIST: Service[] = [
    {
        title: 'Language Editing',
        description: 'Ensure your manuscript is polished, professional, and free of grammatical errors with our expert editing services.',
        icon: <EditIcon />,
    },
    {
        title: 'Plagiarism Check',
        description: 'Comprehensive screening against a vast database of publications to ensure the originality of your work.',
        icon: <SearchIcon />,
    },
    {
        title: 'Paraphrasing & Rephrasing',
        description: 'Skillfully rewrite sections to improve clarity, flow, and avoid potential plagiarism, while retaining the original meaning.',
        icon: <ParaphraseIcon />,
    },
    {
        title: 'Journal Suggestions',
        description: 'Get tailored recommendations for the most suitable, high-impact journals for your manuscript based on its scope and findings.',
        icon: <JournalIcon />,
    },
    {
        title: 'Grant Proposal Writing',
        description: 'Strengthen your funding applications with our expert guidance, from structuring your proposal to refining your research narrative.',
        icon: <GrantIcon />,
    },
    {
        title: 'Retraction & PubPeer Guidance',
        description: 'Navigate the complexities of publication ethics, from addressing PubPeer comments to preventing or managing retractions.',
        icon: <AlertIcon />,
    },
];

export const TRENDS_DATA: Trend[] = [
    {
        id: 1,
        title: 'The Rise of AI in Academic Research',
        image: 'https://picsum.photos/seed/ai/600/400',
        snippet: 'Artificial intelligence is no longer a futuristic concept but a practical tool transforming research methodologies. From data analysis to hypothesis generation, AI is accelerating discovery at an unprecedented rate.',
        contentPath: '/content/blog/ai-in-academic-research.md',
        publishDate: '2024-05-15T10:00:00Z'
    },
    {
        id: 2,
        title: 'Open Access and the Future of Publishing',
        image: 'https://picsum.photos/seed/open/600/400',
        snippet: 'The open access movement is gaining momentum, challenging traditional subscription-based publishing models. What does this mean for researchers, institutions, and the dissemination of knowledge?',
        contentPath: '/content/blog/open-access-publishing.md',
        publishDate: '2024-05-01T11:00:00Z'
    },
    {
        id: 3,
        title: 'Interdisciplinary Collaboration is Key',
        image: 'https://picsum.photos/seed/collab/600/400',
        snippet: 'Solving the world\'s most complex problems requires expertise from multiple fields. We explore the growing importance of interdisciplinary research and how to foster effective collaboration.',
        contentPath: '/content/blog/interdisciplinary-collaboration.md',
        publishDate: '2024-04-20T09:00:00Z'
    },
    {
        id: 4,
        title: 'The Importance of Research Data Management',
        image: 'https://picsum.photos/seed/data/600/400',
        snippet: 'In an era of big data, robust data management is more critical than ever. Funders and journals are now implementing stricter requirements for data availability and reproducibility.',
        contentPath: '/content/blog/research-data-management.md',
        publishDate: '2023-11-10T14:00:00Z'
    },

    {
        id: 5,
        title: 'Reimagining AI in Research',
        image: 'https://picsum.photos/seed/data/600/400',
        snippet: 'In an era of big data, robust data management is more critical than ever. Funders and journals are now implementing stricter requirements for data availability and reproducibility.',
        contentPath: '/content/blog/ai-role.md',
        publishDate: '2025-11-10T14:00:00Z'
    }
].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
