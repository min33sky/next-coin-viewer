import { FileWarning } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface AlertAreaProps {
  message?: string;
}

export function AlertArea({ message }: AlertAreaProps) {
  return (
    <Alert>
      <FileWarning className="h-4 w-4" />
      <AlertTitle>Oops!</AlertTitle>
      <AlertDescription>
        {message || '알 수 없는 오류가 발생했습니다.'}
      </AlertDescription>
    </Alert>
  );
}
