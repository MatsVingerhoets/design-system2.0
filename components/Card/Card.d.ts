import { PropsWithChildren } from '../../../node_modules/react';
type Props = {
    title?: string;
    className?: string;
    stretch?: boolean;
};
declare const Card: ({ title, children, className, stretch }: PropsWithChildren<Props>) => import("react/jsx-runtime").JSX.Element;
export default Card;
