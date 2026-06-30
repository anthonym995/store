import axios from 'axios';

// Create a configured axios instance
export const apiClient = axios.create({
  baseURL: '/api', // This points to your Next.js API routes (e.g., http://localhost:3000/api)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Later, you can easily add interceptors here to automatically attach JWT tokens to every request
