import { useQuery } from '@tanstack/react-query';

import { getHeroes, getLore, getMatchups } from '../api/getHeroes';

export function useHero() {
  return useQuery({ queryKey: ['heroes'], queryFn: getHeroes });
}

export function useLore() {
  return useQuery({ queryKey: ['lore'], queryFn: getLore });
}

export function useMatchups(id: number) {
  return useQuery({ queryKey: ['matchups', id], queryFn: () => getMatchups(id) });
}
