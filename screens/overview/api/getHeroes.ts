import apiFetch from 'services/client';

export function getHeroes() {
  return apiFetch('/heroStats');
}

export function getLore() {
  return apiFetch('/constants/hero_lore');
}
