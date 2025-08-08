const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

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
    console.log('Received request body:', req.body);
    const { abstract } = req.body;

    if (!abstract || typeof abstract !== 'string' || abstract.trim().length === 0) {
      return res.status(400).json({ error: 'Invalid or missing abstract in request body' });
    }

    const prompt = `Generate 4 concise and distinct titles for the following abstract. Return the titles as a numbered list:\n\n${abstract}`;

    const chatCompletion = await openai.chat.completions.create({
      temperature: 0.5,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 1,
      stream: false,
      model: "phi_3_5_moe_instruct",
      messages: [{ role: "user", content: prompt }],
    });

    console.log('OpenAI API response:', chatCompletion);

    if (!chatCompletion.choices || chatCompletion.choices.length === 0) {
      return res.status(500).json({ error: 'No choices returned from OpenAI API' });
    }

    const textResponse = chatCompletion.choices[0].message.content;

    const titles = textResponse
      .split(/\n+/)
      .map(line => line.trim())
      .filter(line => line.match(/^\d+\.\s*/))
      .map(line => line.replace(/^\d+\.\s*/, ''));

    res.json({ titles });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
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
