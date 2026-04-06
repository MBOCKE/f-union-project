
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'purple' | 'blue' | 'red' | 'white' | 'outline' | 'navy';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  variant = 'purple',

  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {

  const baseStyles = "rounded-full font-bold transition-all active:scale-95 inline-flex items-center justify-center";

  const variants = {
    purple: "bg-summit-purple text-white hover:bg-opacity-90",
    blue: "bg-summit-blue text-white hover:bg-opacity-90",
    red: "bg-summit-red text-white hover:bg-opacity-90",
    white: "bg-white text-summit-purple hover:bg-gray-100",
    outline: "border-2 border-white text-white hover:bg-white hover:text-summit-purple",
    navy: "bg-[#151433] text-white hover:bg-opacity-90"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-8 py-2.5 text-base",
    lg: "px-10 py-3 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};