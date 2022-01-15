export const API_URL = process.env.GATSBY_API_URL;
if (!API_URL) {
  console.error('API_URL env was not provided');
}
