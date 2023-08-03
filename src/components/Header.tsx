import React from 'react';
import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background z-50">
      <div className="flex items-center justify-end h-20 px-4 md:px-0">
        <ModeToggle />
      </div>
    </header>
  );
}
