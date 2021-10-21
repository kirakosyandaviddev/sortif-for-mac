export interface BadgeProps {
  className?: string;
  label: string;
  disabled?: boolean;
  rightIcon?: () => React.ReactNode | undefined;
}
