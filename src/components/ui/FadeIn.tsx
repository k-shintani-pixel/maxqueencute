'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
};

export function FadeIn({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  /*
   * amount: 0.05 — 要素の5%が viewport に入った瞬間にトリガー
   * margin を使わずに amount ベースにすることで、PC 大画面でも確実に発火する
   * once: true — 一度発火したら元に戻さない
   */
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const directionOffset = {
    up:    { y: 36, x: 0 },
    down:  { y: -36, x: 0 },
    left:  { y: 0, x: 36 },
    right: { y: 0, x: -36 },
    none:  { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
