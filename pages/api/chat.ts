// pages/api/chat.ts

import { OpenAI } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { prompt } = req.body;

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful retail sales analyst.' },
        { role: 'user', content: prompt }
      ]
    });

    const reply = chatResponse.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error: any) {
    console.error('OpenAI error:', error);
    res.status(500).json({ error: error.message });
  }
}