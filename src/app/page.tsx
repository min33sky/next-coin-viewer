import { Button } from '@/components/ui/button';
import { CoinsIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full flex flex-col space-y-6 items-center justify-center">
      <CoinsIcon size={128} />
      <h1 className="font-bold text-2xl">오늘의 코인 시세를 알아보자.</h1>
      <Button variant={'outline'} asChild>
        <Link href="/coins">드가자!</Link>
      </Button>
    </main>
  );
}
