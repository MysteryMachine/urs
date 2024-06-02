import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { PageComponent } from './page';
import { DOMElement, ReactNode } from 'react';

export const CollapsibleTrigger: PageComponent = ({ children }) => {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger>
      <div className={`font-extrabold mb-4`}>{children}</div>
    </CollapsiblePrimitive.CollapsibleTrigger>
  );
};

export const CollapsibleContent: PageComponent = ({ children }) => {
  return (
    <div className={``}>
      <CollapsiblePrimitive.CollapsibleContent>
        <div className={`mb-8 border-2 rounded-sm p-6`}>{children}</div>
      </CollapsiblePrimitive.CollapsibleContent>
    </div>
  );
};

export const Collapsible: React.FC<{
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}> = ({ children, open, onOpenChange }) => {
  return (
    <div className={`ml-4`}>
      <CollapsiblePrimitive.Root open={open} onOpenChange={onOpenChange}>
        {children}
      </CollapsiblePrimitive.Root>
    </div>
  );
};

export const Arrow = ({ open }: { open: boolean }) => {
  return (
    <span className={`ml-2`}>{open ? '◀' : '▶'}</span>
  );
};
