'use client';

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { ArrowBigLeft, ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button
      aria-label="back"
      title="뒤로가기"
      variant={'outline'}
      size={'sm'}
      onClick={handleClick}
    >
      <ArrowLeft className="w-5 h-5 mr-1" />
      뒤로가기
    </Button>
  );
}
