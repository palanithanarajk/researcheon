const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');
const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost'],
  credentials: true,
}));

app.use(express.json());

// Initialize OpenAI client with correct configuration
const openai = new OpenAI({
  apiKey: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGSjg2R2NGM2pUYk5MT2NvNE52WmtVQ0lVbWZZQ3FvcXRPUWVNZmJoTmxFIn0.eyJleHAiOjE3ODQ3Mzg5MTcsImlhdCI6MTc1MzIwMjkxNywianRpIjoiYTBkMGM1MGMtYzA0Yy00MDA4LTg0MmEtNjU1OWM2N2ZiYjVjIiwiaXNzIjoiaHR0cDovL2dhdGV3YXkuZTJlbmV0d29ya3MuY29tL2F1dGgvcmVhbG1zL2FwaW1hbiIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YjM1NDc1YS04ZTA4LTQ2NzAtYTA1YS01NjE5Mjc0NTQ2NGIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcGltYW51aSIsInNlc3Npb25fc3RhdGUiOiI4NjAwODFlNS1lZTg1LTQxOTUtOTgwMi05NDhkNzg2M2E0MWYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImFwaXVzZXIiLCJkZWZhdWx0LXJvbGVzLWFwaW1hbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6Ijg2MDA4MWU1LWVlODUtNDE5NS05ODAyLTk0OGQ3ODYzYTQxZiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IlBhbGFuaSBUaGFuYXJhaiIsInByZWZlcnJlZF91c2VybmFtZSI6InRoYW5yYWoua3NAZ21haWwuY29tIiwiZ2l2ZW5fbmFtZSI6IlBhbGFuaSIsImZhbWlseV9uYW1lIjoiVGhhbmFyYWoiLCJlbWFpbCI6InRoYW5yYWoua3NAZ21haWwuY29tIn0.AAybrKkR51RdmyFz13hxxKgiKvZaTlaoIZ3JKKFXKXV24AxRlsovzJl0T4wS9cgeHpdAKN19Dz_wsgRh6QVGlwi5nLZp2E9v3hc9k8sWLqD9lv22MZWoyJ5VicPVkKWFp_SFAIyLGa8H_P99beTqHGPZq9GmX-J-B_FN_b3lL40",
  baseURL: "https://infer.e2enetworks.net/project/p-1883/genai/phi_3_5_moe_instruct/v1"
});

app.post('/api/generate', async (req, res) => {
  try {
    const { abstract } = req.body;

    if (!abstract || typeof abstract !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing abstract in request body' });
    }

    // Updated prompt to generate 5 academic, technical STEM research titles with no plagiarism, in a parsable format
    const prompt = `Generate 5 unique research paper titles based on the following abstract. The titles should have an academic tone, use technical STEM research terminology appropriately, and avoid any plagiarism. Provide the titles as a JSON array of strings without quotes around the array itself.

Abstract: ${abstract}

Titles:`;

    const response = await openai.chat.completions.create({
      model: 'phi_3_5_moe_instruct',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that generates academic research paper titles.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    if (!response.choices || response.choices.length === 0) {
      return res.status(500).json({ error: 'No choices returned from OpenAI API' });
    }

    // Parse the titles from the response
    let titles = [];
    try {
      // Try to parse JSON array from the response
      titles = JSON.parse(response.choices[0].message.content.trim());
    } catch (parseError) {
      // Fallback: split by new lines and clean
      titles = response.choices[0].message.content.trim().split('\n').map(t => t.replace(/^\d+\.\s*/, '').trim()).filter(t => t.length > 0);
    }

    res.json({ titles });
  } catch (error) {
    console.error('Error generating titles:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

app.post('/api/check-pubpeer', async (req, res) => {
  try {
    let { doi } = req.body;
    if (!doi || typeof doi !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing DOI in request body' });
    }

    // Extract DOI from URL if full URL is provided
    const doiMatch = doi.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
    if (doiMatch) {
      doi = doiMatch[0];
    } else {
      return res.status(400).json({ error: 'Invalid DOI format' });
    }

    // Query Crossref API for DOI metadata
    const crossrefUrl = `https://api.crossref.org/v1/works/${encodeURIComponent(doi)}`;
    const response = await axios.get(crossrefUrl);
    const data = response.data;

    // Check for retraction in updated-by field
    const updatedBy = data.message['updated-by'];
    if (updatedBy && Array.isArray(updatedBy)) {
      const retractionEntry = updatedBy.find(entry => entry.type === 'retraction');
      if (retractionEntry) {
        return res.json({ hasComments: true, message: 'This paper has been retracted.' });
      }
    }

    return res.json({ hasComments: false, message: 'No retraction found for this DOI.' });
  } catch (error) {
    console.error('Error checking Crossref for retraction:', error.message);
    res.status(500).json({ error: 'Failed to check retraction status' });
  }
});

app.get('/api/generate', (req, res) => {
  res.send('API is running');
});

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
