import { IconType } from 'react-icons';
declare function Button({ children, className, onClick, style, color, iconLeft: IconLeft, iconRight: IconRight, disabled, type, roundedFull, }: {
    color?: 'primary' | 'secondary' | 'tertiary' | 'white';
    style?: 'filled' | 'outline' | 'borderless';
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    iconLeft?: IconType;
    iconRight?: IconType;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    roundedFull?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export default Button;
