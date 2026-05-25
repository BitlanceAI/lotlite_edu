import axios from 'axios';
import { WebhookPayload } from '../types';

// Falls back to the built-in Next.js API route so the frontend works standalone
// (no separate Express service needed). Set NEXT_PUBLIC_BACKEND_URL to route to
// an external backend instead.
const WEBHOOK_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? '/api/analyze';

/**
 * Sends candidate resume details and job configuration to the n8n webhook.
 */
export async function sendResumeToWebhook(
  payload: WebhookPayload
): Promise<any> {
  const response = await axios.post(WEBHOOK_URL, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 60000,
  });
  return response.data;
}

