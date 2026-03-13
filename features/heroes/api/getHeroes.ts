import apiFetch from 'services/client';

export default function getHeroes() {
  return apiFetch('/heroes');
}
