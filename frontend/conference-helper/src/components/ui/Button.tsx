import React from 'react';
import { classNames } from '@/lib/utils';

// Interface is used to define shape of an object
// extends means ButtonProps inherits from React.ButtonHTMLAttributes
// React.Button is a type provided by React that includes HTML attributes
// found in a regular button element, basically giving ButtonProps all these attributes

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// variant? is an optional property, the ? is what makes it optional
// the primary | secondary and etc, these are called union types meaning that variant property
// can be one of the specified string literals 
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
// notice how this one does not have a ?
// this means that it is a required property (children) of ButtonProps
// react.ReactNode is a type from React that can represent any valid React child
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border border-gray-300 hover:bg-gray-100 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={classNames(
        'font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};