import { useQuery } from '@tanstack/react-query';
import getHeroes from '../api/getHeroes';

export default function UseHeroes() {
  return useQuery({ queryKey: ['heroes'], queryFn: getHeroes });
}
