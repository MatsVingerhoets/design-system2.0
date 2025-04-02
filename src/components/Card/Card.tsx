import clsx from 'clsx';
import { PropsWithChildren } from 'react';

type Props = {
  title?: string;
  className?: string;
  stretch?: boolean;
};
const Card = ({ title, children, className, stretch }: PropsWithChildren<Props>) => (
  <div className={clsx('bg-white rounded-lg p-4 md:p-10', className, stretch && 'h-full')}>
    {title && <h2 className="text-xl text-blue-900 font-bold leading-6 mb-6">{title}</h2>}
    {children}
  </div>
);
export default Card;
