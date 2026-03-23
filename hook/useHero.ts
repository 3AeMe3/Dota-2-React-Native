import { useQuery } from '@tanstack/react-query';
import { fetchHeroes } from '../query/fetchHeroes';

export function useHero() {
  return useQuery({ queryKey: ['heroes'], queryFn: fetchHeroes });
}
