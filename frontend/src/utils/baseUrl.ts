export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://tornado-team4-be.vercel.app';

export const FE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://tornado-team4.vercel.app';
