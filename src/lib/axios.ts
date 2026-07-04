import axios from 'axios';

const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    // If you manually set NEXT_PUBLIC_APP_URL in Vercel, it uses that.
    if (process.env.NEXT_PUBLIC_APP_URL) {
      return process.env.NEXT_PUBLIC_APP_URL + '/api';
    }
    // If deployed on Vercel, automatically use Vercel's generated URL (no config needed)
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}/api`;
    }
    // Fallback for local development
    return 'http://localhost:3000/api';
  }
  return '/api';
};

// Create a configured axios instance
export const apiClient = axios.create({
  baseURL: getBaseUrl(), // Supports both SSR and Client-side requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Later, you can easily add interceptors here to automatically attach JWT tokens to every request
