import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownContentProps {
  contentPath: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ contentPath }) => {
  const [content, setContent] = useState<string>('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Use relative path for deployed environment
        const url = contentPath.startsWith('/') ? contentPath : `/${contentPath}`;
        console.log('Attempting to fetch content from:', url);
        
        const response = await fetch(url);
        console.log('Response status:', response.status, response.statusText);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        
        const text = await response.text();
        console.log('Content fetched successfully, length:', text.length);
        setContent(text);
        setError(null);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError(err instanceof Error ? err.message : 'Failed to load content');
        setContent('Failed to load content. Please try again later.');
      }
    };

    fetchContent();
  }, [contentPath]);

  return (
    <div className="prose prose-lg max-w-none">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <h3 className="text-red-800 font-semibold mb-2">Content Loading Error</h3>
          <p className="text-red-700 text-sm">
            {error}
          </p>
          <p className="text-red-600 text-xs mt-2">
            Path: {contentPath}
          </p>
        </div>
      )}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-brand-dark mb-4 mt-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-brand-dark mb-3 mt-5">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-medium text-brand-dark mb-2 mt-4">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-700 mb-1">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-brand-primary pl-4 italic text-gray-600 my-4">
              {children}
            </blockquote>
          ),
          code: ({ inline, children }: { inline?: boolean; children: React.ReactNode }) => {
            if (inline) {
              return <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>;
            }
            return (
              <code className="block bg-gray-100 p-3 rounded text-sm overflow-x-auto my-4">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-brand-primary hover:text-brand-secondary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-700">{children}</em>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full border border-gray-300">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-2">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
