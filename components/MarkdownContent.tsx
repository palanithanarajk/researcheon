import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownContentProps {
  contentPath: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ contentPath }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    // Simulate loading markdown content from files
    // In a real application, you would fetch this from your file system or API
    const markdownContentMap: Record<string, string> = {
      '/content/blog/research-data-management.md': `# The Importance of Research Data Management

In an era of big data, robust data management is more critical than ever. Funders and journals are now implementing stricter requirements for data availability and reproducibility.

## Key Components of Data Management

### 1. Data Management Plans (DMPs)
- Detailed documentation of how data will be collected, processed, and shared
- Required by most funding agencies
- Should be created during the grant proposal stage

### 2. Standardized Metadata
- Consistent description of data across projects
- Enables better discoverability and reuse
- Follows established standards like Dublin Core or FAIR principles

### 3. Public Repositories
- Platforms like Zenodo, Figshare, and Dryad
- Ensure long-term preservation and access
- Provide DOIs for citable data

## Benefits of Good Data Management

### Transparency and Verification
- Allows others to verify and build upon your research
- Increases the credibility and reproducibility of findings
- Supports the scientific method through peer verification

### Compliance Requirements
- Meets funder and journal mandates
- Avoids delays in publication or funding
- Demonstrates institutional commitment to research integrity

### Impact and Visibility
- Increases the visibility and citation of your work
- Maximizes the return on investment for research funding
- Contributes to the broader research ecosystem

### Efficiency and Organization
- Saves time by organizing data from the start
- Reduces data loss and corruption risks
- Facilitates collaboration and data sharing

## Best Practices

1. **Plan Early**: Develop a DMP before data collection begins
2. **Use Standard Formats**: Choose widely supported file formats
3. **Document Everything**: Keep detailed records of methodologies
4. **Version Control**: Implement proper versioning for datasets
5. **Regular Backups**: Ensure data security and redundancy

## Conclusion

While good data management adds another layer of work for researchers, it is essential for transparency, verification, and ensuring that valuable data can be reused by others. This approach maximizes the return on investment for research funding and contributes to the advancement of scientific knowledge.`,
      
      '/content/blog/ai-in-academic-research.md': `# The Rise of AI in Academic Research

Artificial intelligence is no longer a futuristic concept but a practical tool transforming research methodologies. From data analysis to hypothesis generation, AI is accelerating discovery at an unprecedented rate.

## Transforming Research Methodologies

### Data Analysis and Pattern Recognition
- Processing massive datasets that would be impossible for humans to analyze manually
- Identifying subtle patterns and correlations that might be overlooked
- Enabling real-time analysis of complex biological, social, and physical systems

### Hypothesis Generation
- Analyzing existing literature to identify research gaps
- Suggesting novel hypotheses based on data patterns
- Reducing the time spent on preliminary research phases

## Key Applications in Academia

### Natural Language Processing
- Automated literature review and synthesis
- Research paper summarization and extraction
- Language translation for international collaboration

### Machine Learning in Scientific Discovery
- Predictive modeling for experimental outcomes
- Optimization of research parameters
- Automated image analysis in microscopy and medical imaging

### Data Management and Organization
- Intelligent categorization and tagging of research data
- Automated metadata extraction
- Enhanced search and retrieval systems

## Benefits and Opportunities

### Accelerated Research Cycles
- Faster data collection and analysis
- Reduced time from hypothesis to publication
- More efficient use of research resources

### Enhanced Collaboration
- Breaking down language barriers
- Facilitating international research partnerships
- Enabling real-time collaboration across continents

### Improved Research Quality
- More rigorous statistical analysis
- Reduced human error in data processing
- Enhanced reproducibility of results

## Challenges and Considerations

### Ethical Implications
- Ensuring algorithmic fairness and bias detection
- Maintaining transparency in AI-driven research
- Addressing privacy concerns in data usage

### Technical Limitations
- Need for large, high-quality training datasets
- Computational resource requirements
- Integration with existing research workflows

## Future Directions

The integration of AI in academic research is still in its early stages. As the technology continues to evolve, we can expect:

1. **More sophisticated AI tools** tailored to specific research domains
2. **Improved human-AI collaboration** frameworks
3. **Better integration** with existing research infrastructure
4. **Enhanced ethical guidelines** for AI-assisted research

## Conclusion

AI is not replacing researchers but augmenting their capabilities. By leveraging AI tools, academics can focus more on creative thinking, complex problem-solving, and human-centered aspects of research while delegating routine and repetitive tasks to intelligent systems.`,
      
      '/content/blog/open-access-publishing.md': `# Open Access and the Future of Publishing

The open access movement is gaining momentum, challenging traditional subscription-based publishing models. What does this mean for researchers, institutions, and the dissemination of knowledge?

## Understanding Open Access

### Definition and Principles
Open access refers to research outputs that are digital, online, free of charge, and free of most copyright and licensing restrictions. The key principles include:

- **Free availability**: Research is available to anyone with internet access
- **Unrestricted use**: Users can read, download, copy, distribute, print, search, or link to full texts
- **Legal compliance**: Content is protected by copyright, with licensing that ensures reuse rights

### Types of Open Access
1. **Gold Open Access**: Published in open access journals
2. **Green Open Access**: Self-archiving in institutional repositories
3. **Hybrid Open Access**: Traditional journals with optional open access options

## The Shift Towards Open Access

### Driving Forces
- **Funder mandates**: Many funding agencies now require open access publications
- **Institutional policies**: Universities are adopting open access mandates
- **Public pressure**: Taxpayers demand access to publicly funded research
- **Technological advancement**: Digital publishing makes open access more feasible

### Benefits of Open Access
- **Increased visibility**: Research reaches a wider audience
- **Higher impact**: More citations and greater influence
- **Faster dissemination**: Immediate global access
- **Equity**: Removes financial barriers to knowledge

## Challenges and Concernations

### Financial Sustainability
- **Article Processing Charges (APCs)**: High costs for authors
- **Business models**: Finding sustainable funding mechanisms
- **Equity issues**: Potential for creating new access barriers

### Quality Control
- **Peer review**: Maintaining rigorous standards
- **Predatory publishers**: Avoiding exploitative practices
- **Reputation**: Building trust in new publishing models

### Technical Challenges
- **Long-term preservation**: Ensuring ongoing access
- **Metadata standards**: Consistent identification and citation
- **Integration**: Working with existing systems and workflows

## The Future Landscape

### Emerging Trends
1. **Diamond Open Access**: No fees for authors or readers
2. **Collaborative platforms**: Community-driven publishing initiatives
3. **Preprint servers**: Rapid sharing of research before peer review
4. **Data sharing**: Integration of research data with publications

### Institutional Responses
- **Repository development**: Building robust institutional repositories
- **Publication funds**: Creating funds to support APCs
- **Training programs**: Educating researchers about open access options
- **Policy development**: Implementing institutional open access policies

## Practical Considerations for Researchers

### Choosing Where to Publish
- **Journal reputation**: Assessing quality and impact
- **Open access options**: Understanding available models
- **Funder requirements**: Meeting specific mandates
- **Institutional support**: Utilizing available resources

### Managing Rights and Permissions
- **Copyright**: Understanding your rights as an author
- **Licensing**: Choosing appropriate Creative Commons licenses
- **Embargoes**: Navigating institutional repository policies
- **Version control**: Managing different versions of publications

## Conclusion

The transition to open access is not just a change in business model but a fundamental shift in how knowledge is created, shared, and used. While challenges remain, the benefits of increased access, impact, and equity make open access the future of scholarly communication. Researchers, institutions, and publishers must work together to create sustainable and equitable publishing systems that serve the global research community.`,
      
      '/content/blog/interdisciplinary-collaboration.md': `# Interdisciplinary Collaboration is Key

Solving the world's most complex problems requires expertise from multiple fields. We explore the growing importance of interdisciplinary research and how to foster effective collaboration.

## The Need for Interdisciplinary Approaches

### Complex Problems Require Complex Solutions
Modern challenges like climate change, pandemics, and social inequality cannot be solved by single disciplines alone. These problems are:

- **Multi-faceted**: Involving social, economic, environmental, and technological dimensions
- **Systemic**: Requiring understanding of complex interactions and feedback loops
- **Dynamic**: Evolving and requiring adaptive solutions
- **Context-dependent**: Requiring consideration of local and global contexts

### Limitations of Traditional Disciplinary Boundaries
- **Knowledge silos**: Limited communication between disciplines
- **Methodological constraints**: Different approaches and standards
- **Language barriers**: Different terminology and concepts
- **Institutional structures**: Departmental and funding barriers

## Benefits of Interdisciplinary Research

### Enhanced Problem-Solving
- **Multiple perspectives**: Different ways of understanding and approaching problems
- **Complementary skills**: Combining diverse expertise and methodologies
- **Innovative solutions**: Novel approaches that emerge from disciplinary intersections
- **Holistic understanding**: More comprehensive analysis of complex issues

### Increased Impact and Relevance
- **Broader applicability**: Solutions that work across different contexts
- **Greater societal relevance**: Addressing real-world problems more effectively
- **Enhanced collaboration**: Building bridges between different communities
- **Knowledge transfer**: Sharing methods and insights across disciplines

### Professional Development
- **Skill expansion**: Learning new methodologies and approaches
- **Network building**: Connecting with researchers from different fields
- **Career opportunities**: Opening new pathways and collaborations
- **Personal growth**: Developing new ways of thinking and problem-solving

## Challenges in Interdisciplinary Collaboration

### Communication and Language Barriers
- **Different terminologies**: Understanding discipline-specific jargon
- **Conceptual differences**: Varying definitions and frameworks
- **Communication styles**: Different ways of presenting and discussing ideas
- **Cultural differences**: Academic cultures and norms vary by discipline

### Methodological Differences
- **Research approaches**: Different methods and standards of evidence
- **Data collection**: Varying practices and protocols
- **Analysis techniques**: Different statistical and qualitative methods
- **Validation standards**: Different criteria for assessing quality

### Institutional and Structural Barriers
- **Departmental silos**: Organizational structures that discourage collaboration
- **Funding mechanisms**: Grants and programs that favor single disciplines
- **Evaluation criteria**: Promotion and tenure systems that reward disciplinary work
- **Time constraints**: Additional time required for collaboration and communication

## Strategies for Effective Interdisciplinary Collaboration

### Building Collaborative Relationships
- **Early engagement**: Starting collaboration before project development
- **Mutual respect**: Valuing different perspectives and expertise
- **Clear communication**: Establishing shared language and expectations
- **Trust building**: Creating an environment of openness and honesty

### Project Planning and Management
- **Clear objectives**: Defining specific, measurable goals
- **Role clarity**: Understanding each participant's responsibilities
- **Timeline management**: Setting realistic deadlines and milestones
- **Resource allocation**: Ensuring adequate time, funding, and support

### Communication Strategies
- **Regular meetings**: Establishing consistent communication channels
- **Shared documentation**: Creating common spaces for collaboration
- **Translation services**: Helping bridge disciplinary language gaps
- **Visual communication**: Using diagrams, models, and visual aids

### Integration and Synthesis
- **Conceptual frameworks**: Developing shared understandings
- **Methodological integration**: Combining different approaches
- **Knowledge synthesis**: Creating new insights from diverse perspectives
- **Dissemination strategies**: Communicating interdisciplinary findings

## Case Studies of Successful Interdisciplinary Research

### Climate Change Research
- **Combining**: Atmospheric science, economics, sociology, and policy
- **Approach**: Integrated assessment models combining natural and social sciences
- **Impact**: Informing international climate policy and adaptation strategies

### Medical Research
- **Combining**: Biology, engineering, computer science, and medicine
- **Approach**: Bioinformatics and computational biology for drug discovery
- **Impact**: Accelerating development of new treatments and therapies

### Urban Planning
- **Combining**: Architecture, sociology, environmental science, and economics
- **Approach**: Smart city initiatives integrating technology and social needs
- **Impact**: Creating more sustainable and livable urban environments

## Future Directions

### Emerging Trends
1. **Digital collaboration tools**: Enabling remote interdisciplinary work
2. **Interdisciplinary education**: Training students to work across boundaries
3. **Funding initiatives**: Supporting collaborative research
4. **Innovation ecosystems**: Creating environments that foster collaboration

### Recommendations for Institutions
- **Incentive structures**: Rewarding interdisciplinary work
- **Physical spaces**: Designing environments that encourage collaboration
- **Training programs**: Developing skills for interdisciplinary work
- **Policy development**: Creating supportive institutional policies

## Conclusion

Interdisciplinary collaboration is not just a nice-to-have but essential for addressing the complex challenges of our time. While significant challenges exist, the benefits of enhanced problem-solving, increased impact, and professional development make it worthwhile. By building collaborative relationships, implementing effective communication strategies, and addressing institutional barriers, researchers can create successful interdisciplinary projects that make meaningful contributions to knowledge and society.`
    };

    setContent(markdownContentMap[contentPath] || 'Content not found');
  }, [contentPath]);

  return (
    <div className="prose prose-lg max-w-none">
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
              <table className="min-w-full border border-gray-300">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-2">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
