import Typography from './typography';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ className, children }: BadgeProps) {
  return (
    <Typography
      variant="body"
      className={`${className ? className : 'bg-[#232426] text-white '} rounded-xl  px-2  py-1 text-sm `}>
      {children}
    </Typography>
  );
}
