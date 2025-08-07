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
    title: 'The Open Access Revolution: How Gold OA is Transforming Scholarly Publishing in 2025',
    image: 'https://picsum.photos/seed/openaccess/600/400',
    snippet: 'Open Access publishing has reached a tipping point, with Gold OA now accounting for 38% of all scholarly articles globally. Market revenues are projected to grow from $2.1B in 2024 to $3.2B by 2028, driven by institutional mandates and new funding models.',
    contentPath: '/content/blog/blog-post-1-oa.md',
    publishDate: '2025-06-23T10:00:00Z'
},

{
    id: 2,
    title: 'Artificial Intelligence in Scholarly Publishing: Revolutionizing Research Integrity and Editorial Workflows',
    image: 'https://picsum.photos/seed/aipublishing/600/400',
    snippet: 'AI is transforming scholarly publishing with a market value growing from $2.8B in 2023 to a projected $41.2B by 2033. While AI enhances manuscript screening, peer review, and fraud detection, it raises critical ethical questions about authorship and content authenticity.',
    contentPath: '/content/blog/blog-post-2-ai.md',
    publishDate: '2025-07-08T10:00:00Z'
},

{
    id: 3,
    title: 'The Predatory Publishing Crisis: Combating Academic Fraud in the Digital Age',
    image: 'https://picsum.photos/seed/predatory/600/400',
    snippet: 'Predatory publishing has exploded from 20 journals in 2010 to over 18,000 in 2024, with 14.6% of research retractions now linked to predatory practices. This $50+ million fraudulent industry threatens research integrity as institutions develop sophisticated detection tools.',
    contentPath: '/content/blog/blog-post-3-predatory.md',
    publishDate: '2025-07-18T10:00:00Z'
},

{
    id: 4,
    title: 'Reimagining Peer Review: Innovation and Technology Reshaping Scholarly Evaluation',
    image: 'https://picsum.photos/seed/peerreview/600/400',
    snippet: 'With 93% of experts believing peer review needs major improvements, the scholarly community is embracing transformative innovations including open peer review, AI-assisted evaluation, and post-publication review. Over 60 preprint servers worldwide are accelerating research dissemination.',
    contentPath: '/content/blog/blog-post-4-peer-review.md',
    publishDate: '2025-07-28T10:00:00Z'
},

{
    id: 5,
    title: 'Digital Transformation in Scholarly Communication: From ORCID to Blockchain Revolution',
    image: 'https://picsum.photos/seed/digital/600/400',
    snippet: 'Digital transformation is revolutionizing scholarly communication through persistent identifiers like ORCID (used by over 2 million researchers), blockchain technology for research integrity, and alternative metrics that complement traditional citations in creating more transparent research ecosystems.',
    contentPath: '/content/blog/blog-post-5-digital.md',
    publishDate: '2025-08-04T10:00:00Z'
}

].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
