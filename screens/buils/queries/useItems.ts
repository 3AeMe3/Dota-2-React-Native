import { useQuery } from '@tanstack/react-query';
import getItems from '../api/getItems';
import findItems from '../api/findItems';

export function useItems(id: number) {
  return useQuery({ queryKey: ['item', id], queryFn: () => getItems(id) });
}

export function useFindItem() {
  return useQuery({ queryKey: ['findItem'], queryFn: findItems });
}
