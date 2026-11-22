
export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface ChatRequestBody {
  message: string;
  history?: ChatMessage[];
}

export interface ChatResponseBody {
  reply: string;
}

export interface ErrorResponseBody {
  error: string;
}
