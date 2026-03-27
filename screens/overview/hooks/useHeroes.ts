import { useQuery } from '@tanstack/react-query';

import { getHeroes, getLore } from '../api/getHeroes';

export function useHero() {
  return useQuery({ queryKey: ['heroes'], queryFn: getHeroes });
}

export function useLore() {
  return useQuery({ queryKey: ['lore'], queryFn: getLore });
}
