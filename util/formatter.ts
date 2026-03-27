import { Brain, Dumbbell, Zap, CircleHelp, Earth } from 'lucide-react-native';

const ATTRIBUTE_META = {
  agi: { label: 'Agilidad', Icon: Zap, color: '#00e978' },
  str: { label: 'Fuerza', Icon: Dumbbell, color: 'red' },
  int: { label: 'Inteligencia', Icon: Brain, color: 'cyan' },
  all: { label: 'Universal', Icon: Earth, color: '#9f56ff' },
} as const;

type AttributeKey = keyof typeof ATTRIBUTE_META;

export const getPrimaryAttributeMeta = (attribute?: string) => {
  if (attribute && attribute in ATTRIBUTE_META) {
    return ATTRIBUTE_META[attribute as AttributeKey];
  }

  return {
    label: 'Desconocido',
    Icon: CircleHelp,
    color: 'red',
  };
};
