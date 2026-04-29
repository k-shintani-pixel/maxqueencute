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
  'inline-flex items-center justify-center font-serif-display tracking-widest cursor-pointer select-none rounded-sm';

const variants: Record<NonNullable<BaseProps['variant']>, string> = {
  /* Gold metallic shimmer — uses .btn-gold from globals.css */
  primary:
    'btn-gold text-white px-8 py-3 rounded-sm',
  /* Accent purple */
  secondary:
    'bg-accent-dark text-white border border-accent-dark rounded-sm px-8 py-3 ' +
    'hover:bg-accent-mid hover:border-accent-mid transition-all duration-300',
  /* Gold outline + hover shimmer */
  outline:
    'btn-outline-gold px-8 py-3 rounded-sm',
  ghost:
    'bg-transparent text-text-secondary hover:text-gold-light underline underline-offset-4 transition-colors duration-200',
};

const sizes: Record<NonNullable<BaseProps['size']>, string> = {
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
