import type { VercelRequest, VercelResponse } from '@vercel/node';
import { generateChatResponse } from '../services/geminiService';
import { ChatRequestBody, ErrorResponseBody } from '../types/chat.types';

export async function handleChatMessage(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  try {
    const { message, history } = (req.body || {}) as ChatRequestBody;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required and must be a string' } as ErrorResponseBody);
      return;
    }

    const response = await generateChatResponse(message, history);
    res.status(200).json(response);
  } catch (error) {
    console.error('Chat controller error:', error);
    res.status(500).json({ error: 'Internal server error' } as ErrorResponseBody);
  }
}
