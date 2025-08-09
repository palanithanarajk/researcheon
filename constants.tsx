import React from 'react';
import type { Service, Trend, NavLink } from './types';

const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ParaphraseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4M11 8h6m-6 4h6m-6 4h6" />
    </svg>
);

const JournalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14 0h0" />
    </svg>
);

const GrantIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const DataAnalysisIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const CollaborationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const QualityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


export const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Tools', href: '/#free-tools' },
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
    {
        title: 'Data Analysis Support',
        description: 'Professional statistical analysis and data visualization services to enhance the impact of your research findings.',
        icon: <DataAnalysisIcon />,
    },
    {
        title: 'Collaboration Facilitation',
        description: 'Connect with researchers worldwide and build collaborative networks for enhanced research impact.',
        icon: <CollaborationIcon />,
    },
    {
        title: 'Quality Assurance',
        description: 'Comprehensive review and quality control services to ensure your publication meets the highest standards.',
        icon: <QualityIcon />,
    },
];

export const TRENDS_DATA: Trend[] = [
    {
    id: 1,
    title: 'The Open Access Revolution: How Gold OA is Transforming Scholarly Publishing in 2025',
    image: 'https://picsum.photos/seed/openaccess/600/400',
    snippet: 'Open Access publishing has reached a tipping point, with Gold OA now accounting for 38% of all scholarly articles globally. Market revenues are projected to grow from $2.1B in 2024 to $3.2B by 2028, driven by institutional mandates and new funding models.',
    contentPath: '/content/blog/blog-post-1-oa.md',
    publishDate: '2025-01-23T10:00:00Z'
},

{
    id: 2,
    title: 'Artificial Intelligence in Scholarly Publishing: Revolutionizing Research Integrity and Editorial Workflows',
    image: 'https://picsum.photos/seed/aipublishing/600/400',
    snippet: 'AI is transforming scholarly publishing with a market value growing from $2.8B in 2023 to a projected $41.2B by 2033. While AI enhances manuscript screening, peer review, and fraud detection, it raises critical ethical questions about authorship and content authenticity.',
    contentPath: '/content/blog/blog-post-2-ai.md',
    publishDate: '2025-02-08T10:00:00Z'
},

{
    id: 3,
    title: 'The Predatory Publishing Crisis: Combating Academic Fraud in the Digital Age',
    image: 'https://picsum.photos/seed/predatory/600/400',
    snippet: 'Predatory publishing has exploded from 20 journals in 2010 to over 18,000 in 2024, with 14.6% of research retractions now linked to predatory practices. This $50+ million fraudulent industry threatens research integrity as institutions develop sophisticated detection tools.',
    contentPath: '/content/blog/blog-post-3-predatory.md',
    publishDate: '2025-03-18T10:00:00Z'
},

{
    id: 4,
    title: 'Reimagining Peer Review: Innovation and Technology Reshaping Scholarly Evaluation',
    image: 'https://picsum.photos/seed/peerreview/600/400',
    snippet: 'With 93% of experts believing peer review needs major improvements, the scholarly community is embracing transformative innovations including open peer review, AI-assisted evaluation, and post-publication review. Over 60 preprint servers worldwide are accelerating research dissemination.',
    contentPath: '/content/blog/blog-post-4-peer-review.md',
    publishDate: '2025-04-28T10:00:00Z'
},

{
    id: 5,
    title: 'Digital Transformation in Scholarly Communication: From ORCID to Blockchain Revolution',
    image: 'https://picsum.photos/seed/digital/600/400',
    snippet: 'Digital transformation is revolutionizing scholarly communication through persistent identifiers like ORCID (used by over 2 million researchers), blockchain technology for research integrity, and alternative metrics that complement traditional citations in creating more transparent research ecosystems.',
    contentPath: '/content/blog/blog-post-5-digital.md',
    publishDate: '2025-05-04T10:00:00Z'
},
{
    id: 6,
    title: 'Recent Trends in Computer Vision',
    image: 'https://picsum.photos/seed/vision/600/400',
    snippet: 'Computer vision is advancing rapidly in 2025 with trends like event-based imaging for real-time defect detection and AI-driven tools for multi-modal analysis, impacting industries from manufacturing to healthcare.',
    contentPath: '/content/blog/blog-post-6-cv.md',
    publishDate: '2025-06-04T10:00:00Z'
}

].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
