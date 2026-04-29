'use client';

import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type Props = ButtonProps | AnchorProps;

const baseStyles =
  'inline-flex items-center justify-center font-serif-display tracking-widest transition-all duration-300 cursor-pointer select-none';

const variants = {
  primary:
    'bg-gold-light text-base border border-gold-light hover:bg-gold-dark hover:border-gold-dark text-white px-8 py-3',
  secondary:
    'bg-accent-dark text-base border border-accent-dark hover:bg-accent-light hover:border-accent-light text-white px-8 py-3',
  outline:
    'bg-transparent text-text-primary border border-gold-light hover:bg-gold-light/10 px-8 py-3',
  ghost: 'bg-transparent text-text-secondary hover:text-gold-light underline underline-offset-4',
};

const sizes = {
  sm: 'text-xs px-5 py-2',
  md: 'text-sm px-8 py-3',
  lg: 'text-base px-10 py-4',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: Props) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as AnchorProps;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { ...buttonProps } = props as ButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
