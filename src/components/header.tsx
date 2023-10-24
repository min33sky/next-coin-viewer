import React from 'react';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { CoinsIcon } from 'lucide-react';

/**
 * Main Header Component
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background z-50">
      <div className="container flex items-center justify-between h-20 px-6 2xl:px-0">
        <div className="relative bg-background">
          <Link href={'/'} className="font-bold">
            오늘의코인
          </Link>
          <CoinsIcon
            size={20}
            className="absolute -right-3 -top-3 text-yellow-500"
          />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
