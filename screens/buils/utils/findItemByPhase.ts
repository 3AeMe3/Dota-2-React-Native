type Phase = 'start_game_items' | 'early_game_items' | 'mid_game_items' | 'late_game_items';

type ItemPhaseData = Record<Phase, Record<string, number>>;
type FintItemMap = Record<string, string>;

type FindItemsByPhaseProps = {
  item: ItemPhaseData;
  findItem: FintItemMap;
  phase: Phase;
};

export function findItemByPhase({ item, findItem, phase }: FindItemsByPhaseProps) {
  return Object.entries(item[phase])
    .map(([itemId, value]) => {
      const itemObject = findItem[itemId] ?? 'Unknown Item';

      return {
        name: itemObject,
        value,
      };
    })
    .sort((a, b) => b.value - a.value);
}
