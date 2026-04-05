import apiFetch from '@/services/client';

export default function findItems() {
  return apiFetch('/constants/item_ids');
}
