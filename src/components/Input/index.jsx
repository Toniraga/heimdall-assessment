import React from 'react';

export const ElrInput = ({
  onChange,
  placeholder,
  className,
  ...props
}) => (
  <input
    className={`w-full h-12 outline-none text-sm ${className}`}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
);