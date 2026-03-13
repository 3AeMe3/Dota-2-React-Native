const BASE_URL = 'https://api.opendota.com/api';

export default async function apiFetch(path: string) {
  const response = await fetch(`${BASE_URL} ${path} `);

  if (!response.ok) {
    throw new Error(`Failed to fetch : ${path}`);
  }

  return response.json();
}
