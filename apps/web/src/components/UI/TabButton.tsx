import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';

interface Props {
  name: string;
  icon: ReactNode;
  active: boolean;
  type?: string;
  showOnSm?: boolean;
  onClick: () => void;
}

const TabButton: FC<Props> = ({ name, icon, active, type, showOnSm = false, onClick }) => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (type) {
          router.query.type = type;
          router.push(router);
        }
        onClick();
      }}
      className={clsx(
        { 'text-brand bg-brand-100 dark:bg-opacity-20 bg-opacity-100': active },
        'flex items-center space-x-2 rounded-lg text-sm px-4 sm:px-3 font-medium py-2 sm:py-1.5 text-gray-500 hover:bg-brand-100 dark:hover:bg-opacity-20 hover:bg-opacity-100'
      )}
      aria-label={name}
    >
      {icon}
      <span className={clsx({ 'hidden sm:block': !showOnSm })}>{name}</span>
    </button>
  );
};

export default TabButton;
