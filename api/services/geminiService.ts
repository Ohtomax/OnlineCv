import { ChatMessage, ChatResponseBody } from '../types/chat.types';

export async function generateChatResponse(
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<ChatResponseBody> {
  return { reply: '' };
}
