import { VercelRequest, VercelResponse } from '@vercel/node';

export function asyncNow<T>(
  handler: (request: VercelRequest, response: VercelResponse) => Promise<T>,
) {
  return (request: VercelRequest, response: VercelResponse) => {
    handler(request, response).catch((error) => {
      response.status(500);
      response.json({ error: error.name || error.toString() });
      console.error(error);
    });
  };
}
