import React from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background z-50">
      <div className="container flex items-center justify-between h-20 px-4 xl:px-0">
        <Link href={'/'} className="font-bold">
          오늘의코인
        </Link>

        <ModeToggle />
      </div>
    </header>
  );
}
