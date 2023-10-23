'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import Spinner from './spinner';

interface InfinityScrollTriggerProps {
  limit: number;
  hasNextPage?: boolean;
}

export default function InfinityScrollTrigger({
  limit,
  hasNextPage = true,
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
              router.push(`?limit=${limit + 20}`, {
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

  if (!hasNextPage) return null;

  return (
    <div
      aria-label="Infinity Scroll Trigger"
      ref={triggerRef}
      className="py-8 w-full"
    >
      <p className="sr-only">InfinityScrollTrigger</p>
      <Spinner />
    </div>
  );
}
