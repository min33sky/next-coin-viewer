'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

interface InfinityScrollTriggerProps {
  limit: number;
}

export default function InfinityScrollTrigger({
  limit,
}: InfinityScrollTriggerProps) {
  const router = useRouter();

  const triggerRef = useCallback(
    (node: any) => {
      if (!node) return;

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('triggered');
              router.push(`?limit=${limit + 10}`, {
                scroll: false,
              });
              observer.disconnect();
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        },
      );

      observer.observe(node);
    },
    [limit, router],
  );

  return (
    <div
      aria-label="Infinity Scroll Trigger"
      ref={triggerRef}
      className="h-1 w-1 bg-red-400"
    >
      <p className="sr-only">InfinityScrollTrigger</p>
    </div>
  );
}
