import { useTranslations } from 'next-intl';
import React from 'react';

export const useResMsg = (status: { status: string } | null, ms: number) => {
  const t = useTranslations('contacts');
  const [message, setMessage] = React.useState<string | null>(null);
  const timer = () => setTimeout(() => setMessage(null), ms);
  React.useEffect(() => {
    if (status?.status === 'fail') {
      setMessage(t('err'));
    }
    if (status?.status === 'succed') setMessage(t('suc'));
    if (status?.status !== null) timer();
  }, [status]);

  return { message };
};
