import { Text } from 'react-native';

export default function Badge({ children }: { children: string }) {
  return (
    <Text className="rounded-xl border  border-white/20 bg-slate-800 px-2   py-1 text-sm text-white">
      {children}
    </Text>
  );
}
