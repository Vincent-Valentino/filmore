declare module 'lucide-react' {
  import * as React from 'react';

  export type LucideProps = {
    size?: number | string;
    color?: string;
    strokeWidth?: number;
  };

  export const Star: React.FC<LucideProps>;
  export const X: React.FC<LucideProps>;
}
