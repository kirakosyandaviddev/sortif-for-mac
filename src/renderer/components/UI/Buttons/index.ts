import React from 'react';

export interface ButtonProps {
  className?: string;
  title: string;
  onClick: () => void;
  type: 'submit' | 'button' | undefined;
  leftIcon?: () => React.ReactNode | undefined;
}
