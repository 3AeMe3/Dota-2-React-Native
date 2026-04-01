import apiFetch from '@/services/client';

export default function getItems(id: number) {
  return apiFetch(`/heroes/${id}/itemPopularity`);
}
