import * as CollapsibleBase from './collapsible';
import * as React from 'react';

export interface GenericProps {
  className?: string;
  id?: string;
  href?: string;
  children: React.ReactNode;
  full?: boolean;
}
export type PageComponent = React.FC<GenericProps>;

export const Accent: PageComponent = ({ children, href }) => {
  return href ? (
    <a className={'text-red-500 font-bold'} href={href}>
      {children}
    </a>
  ) : (
    <span className={'text-red-500 font-bold'}> {children} </span>
  );
};

export const I: PageComponent = ({ children }) => {
  return <span className="italic">{children}</span>;
};

export const B: PageComponent = ({ children }) => {
  return <span className="font-extrabold">{children}</span>;
};

export const H1: PageComponent = ({ children, id, href }) => {
  return (
    <a href={href}>
      <h1
        id={id}
        className="text-red-500 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 mt-12"
      >
        {children}
      </h1>
    </a>
  );
};

export const H2: PageComponent = ({ children, id, href }) => {
  return (
    <a href={href}>
      <h2
        id={id}
        className="text-red-500 scroll-m-20 border-b text-3xl font-semibold tracking-tight mt-8 mb-4"
      >
        {children}
      </h2>
    </a>
  );
};

export const H3: PageComponent = ({ children, id, href }) => {
  return (
    <a href={href}>
      <h3
        id={id}
        className="text-red-500 border-b w-3/5 scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-2"
      >
        {children}
      </h3>
    </a>
  );
};

export const H4: PageComponent = ({ children, id, href }) => {
  return (
    <a href={href}>
      <h4
        id={id}
        className="text-red-500 scroll-m-20 text-xl font-semibold tracking-tight mt-2 mb-2"
      >
        {children}
      </h4>
    </a>
  );
};

export const P: PageComponent = ({ className, children }) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 mb-4 ${className}`}>
      {children}
    </p>
  );
};

export const PTight: PageComponent = ({ className, children }) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-2 mb-2 ${className}`}>
      {children}
    </p>
  );
};

export const Ul: PageComponent = ({ children, className, full }) => {
  return (
    <ul
      className={`list-disc leading-6 ml-6 ${full ? 'w-1/1' : 'w-3/4'} ${className}`}
    >
      {' '}
      {children}{' '}
    </ul>
  );
};

export const UlItalic: PageComponent = ({ children, className, full }) => {
  return (
    <ul
      className={`ml-6 leading-6  ${full ? 'w-1/1' : 'w-3/4'} italic ${className}`}
    >
      {children}
    </ul>
  );
};

export const UlDotless: PageComponent = ({ children, className, full }) => {
  return (
    <ul className={`ml-6 leading-6  ${full ? 'w-1/1' : 'w-5/6'} ${className}`}>
      {' '}
      {children}{' '}
    </ul>
  );
};

export const Li: PageComponent = ({ children }) => {
  return <li className="mb-2">{children}</li>;
};

export const Indent: PageComponent = ({ children }) => {
  return <div className={'ml-6'}>{children}</div>;
};

export const SimpleListItem = (s: string) => {
  const [item, description] = s.split(':');
  return (
    <Li>
      <Accent>{item}</Accent>
      {description}
    </Li>
  );
};
