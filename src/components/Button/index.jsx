import React from 'react';
import WhiteSpinner from '../../assets/images/spinner-white.svg';

export const ElrButton
 = ({
  text,
  submit,
  className,
  size = 'lg',
  loading = false,
  ...props
}) => {
  const sizes = {
    lg: 'min-w-10 min-h-3',
    sm: 'min-w-8 min-h-2',
    xm: 'min-w-8 min-h-full',
  };

  const selectSpinner = () => (<img src={WhiteSpinner} className="animate-spin h-3.5 m-auto" alt="spinner" />);
  const value = loading ? selectSpinner() : text;

  return (
    <button
      {...props}
      type={submit ? 'submit' : 'button'}
      className={`${className} ${sizes[size]} disabled:opacity-50 rounded-3xl hover:opacity-70 focus:outline-none disabled:cursor-auto`}
    >
      {value}
    </button>
  );
};