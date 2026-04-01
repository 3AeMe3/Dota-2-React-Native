import { useQuery } from '@tanstack/react-query';
import getItems from '../api/getItems';

export function useItems(id: number) {
  return useQuery({ queryKey: ['item', id], queryFn: () => getItems(id) });
}
