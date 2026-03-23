import apiFetch from 'services/client';

export async function fetchHeroes() {
  return apiFetch('/heroStats');
}
