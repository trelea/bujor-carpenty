'use server';
import { getLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

export const changePath = async (path: string) => {
  const locale = await getLocale();
  return redirect(`/${locale}/${path}`);
};
