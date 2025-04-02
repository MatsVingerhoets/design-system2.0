import clsx from 'clsx';
import { Button as HeadlesButton } from '@headlessui/react';
import { IconType } from 'react-icons';

function Button({
  children,
  className,
  onClick,
  style = 'filled',
  color = 'primary',
  iconLeft: IconLeft,
  iconRight: IconRight,
  disabled = false,
  type = 'button',
  roundedFull,
}: {
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
}) {
  const baseStyles = 'cursor-pointer min-w-[120px] px-4 py-2 text-sm leading-6 font-semibold rounded-lg items-center';

  const disabledStyles = 'opacity-70 pointer-events-none';

  const styleMapping = {
    filled: {
      primary: 'bg-[#E2001A] hover:bg-[#960011] text-white',
      secondary: 'bg-gray-800 hover:bg-gray-900 text-white disabled:bg-gray-500',
      tertiary: 'bg-blue-900 hover:bg-blue-950 text-white',
      white: 'bg-white hover:bg-gray-100 text-gray-900',
    },
    outline: {
      primary: 'border-[#E2001A] hover:border-[#960011] bg-transparent border border-1 text-[#E2001A] hover:text-[#960011]',
      secondary: 'border-gray-800 hover:border-gray-900 text-black bg-transparent border border-1 disabled:bg-gray-500',
      tertiary: 'border-blue-900 hover:border-blue-950 text-black bg-transparent border border-1',
      white: 'border-white hover:border-gray-100 text-white bg-transparent border border-1',
    },
    borderless: {
      primary:
        'bg-transparent rounded-none text-gray-900 hover:border-b hover:mb-[-1px] border-gray-300 disabled:text-gray-500',
      secondary:
        'bg-transparent rounded-none text-gray-900 hover:border-b hover:mb-[-1px] border-gray-300 disabled:text-gray-500',
      tertiary:
        'bg-transparent rounded-none text-gray-900 hover:border-b hover:mb-[-1px] border-gray-300 disabled:text-gray-500',
      white: 'bg-transparent rounded-none text-white hover:border-b hover:mb-[-1px] border-gray-300 disabled:text-gray-500',
    },
  };
  const buttonStyle = styleMapping[style]?.[color];
  return (
    <HeadlesButton
      className={clsx(baseStyles, buttonStyle, disabled && disabledStyles, className, roundedFull && '!rounded-full')}
      disabled={disabled}
      onClick={onClick || undefined}
      type={type}
    >
      {IconLeft && <IconLeft size={16} className={clsx('inline-block align-middle', (children || IconRight) && 'mr-2')} />}
      {children && <span className="leading-none inline-block align-middle">{children}</span>}
      {IconRight && <IconRight size={16} className={clsx('inline-block align-middle', (children || IconLeft) && 'ml-2')} />}
    </HeadlesButton>
  );
}

export default Button;
