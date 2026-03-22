import { Pressable, Text } from 'react-native';

export default function Button({ children }: { children: string }) {
  return (
    <Pressable className="rounded-3xl border bg-red-300 px-3 py-2">
      <Text className="text-white">{children}</Text>
    </Pressable>
  );
}
