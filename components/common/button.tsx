import { Pressable } from 'react-native';
import Typography from './typography';

export default function Button({ children }: { children: string }) {
  return (
    <Pressable className="mx-2 rounded-3xl  border border-white/20 bg-white/10 px-3 py-2">
      <Typography variant="gray">{children}</Typography>
    </Pressable>
  );
}
