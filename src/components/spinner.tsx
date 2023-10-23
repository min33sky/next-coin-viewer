import { cn } from '@/lib/utils';

export default function Spinner() {
  return (
    <div className="h-full flex justify-center items-center space-x-1">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
            className={cn('h-5 w-5 bg-cyan-600 rounded-full animate-bounce')}
          />
        ))}
    </div>
  );
}
