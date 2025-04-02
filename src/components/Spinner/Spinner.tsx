import clsx from 'clsx';

type Props = {
  size?: 'small' | 'default';
};
function Spinner({ size }: Props) {
  const defaultStyles = 'text-[#E2001A] p-2 border-4 border-synRed border-t-transparent rounded-full animate-spin';
  const styleMapping = {
    small: 'w-12 h-12',
    default: 'w-16 h-16',
    large: "w-24 h-24"
  };
  return (
    <div className="d-block mx-auto" role="status">
      <div className={clsx(defaultStyles, styleMapping[size || 'default'])} />
    </div>
  );
}

export default Spinner;
