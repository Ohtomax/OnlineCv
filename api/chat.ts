import type { VercelRequest, VercelResponse } from '@vercel/node';
import { handleChatMessage } from './controllers/chatController';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method === 'POST') {
    return handleChatMessage(req, res);
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}
