import { Pressable, Text } from 'react-native';

export default function Button({ children }: { children: string }) {
  return (
    <Pressable className="mx-2 rounded-3xl  border border-white/20 bg-white/10 px-3 py-2">
      <Text className="text-white/60">{children}</Text>
    </Pressable>
  );
}
