export const BASE_URL =
  'https://tornado-team4-5ca017o7q-ltoppyl-team-dev.vercel.app';
// process.env.NODE_ENV === 'development'
//   ? 'http://localhost:8080'
//   : 'https://tornado-team4-be.vercel.app';

export const WS_URL =
  'ws://tornado-team4-5ca017o7q-ltoppyl-team-dev.vercel.app';
// process.env.NODE_ENV === 'development'
//   ? 'ws://localhost:8000'
//   : 'wss://tornado-team4-be.vercel.app';

export const FE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://tornado-team4.vercel.app';
