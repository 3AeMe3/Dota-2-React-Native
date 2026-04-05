import { ReactNode } from 'react';
import { Text } from 'react-native';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ className, children }: BadgeProps) {
  return (
    <Text
      className={`${className ? className : 'bg-[#232426] text-white '} rounded-xl  px-2  py-1 text-sm `}>
      {children}
    </Text>
  );
}
