export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://tornado-team4-be.vercel.app';

export const WS_URL =
  process.env.NODE_ENV === 'development'
    ? 'ws://localhost:8080'
    : 'wss://tornado-team4-be.vercel.app';
