import { usePathname } from '@/i18n/routing';
import React from 'react';

export const useGetDefaultValue = () => {
  const path = usePathname();
  const [value, setValue] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setValue(
      ['libraries', 'furnitures', 'custom'].includes(path.split('/')[1])
        ? path.split('/')[1]
        : undefined
    );
  }, [path]);
  return {
    value,
  };
};
