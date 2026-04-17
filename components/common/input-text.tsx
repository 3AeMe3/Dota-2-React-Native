import { Search } from 'lucide-react-native';
import { View, TextInput } from 'react-native';

type InputTextProps = {
  label: string;
};

export default function InputText({ label }: InputTextProps) {
  return (
    <View className="relative my-3 flex-row  items-center gap-2 overflow-hidden rounded-3xl border border-white/20 bg-white/10 py-1">
      <Search color={'white'} size={20} style={{ position: 'absolute', left: 10 }} />
      <TextInput
        className="w-full  px-10 text-white"
        placeholder={label}
        placeholderTextColor={'gray'}
      />
    </View>
  );
}
