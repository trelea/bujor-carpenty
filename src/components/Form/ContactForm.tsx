'use client';

import React, { useActionState } from 'react';
import { Button } from '../ui/button';
import { sendMail } from './actions/contact';
import FormField from './FormField';
import { useResMsg } from './hooks/useResMsg';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contacts');
  const [_, formAction, pending] = useActionState(sendMail, null);
  const { message } = useResMsg(_, 5000);

  return (
    <form
      className='grid grid-cols-2 gap-4 md:gap-6 w-full'
      action={formAction}
    >
      <FormField
        label={`${t('name')}*`}
        placeholder={t('name')}
        type='text'
        name='name'
        className='col-span-2 sm:col-span-1'
      />
      <FormField
        label={`${t('surname')}*`}
        placeholder={t('surname')}
        type='text'
        name='surname'
        className='col-span-2 sm:col-span-1'
      />
      <FormField
        name='email'
        label={`${t('email')}*`}
        placeholder={t('email')}
        type='email'
        className='col-span-2'
      />
      <FormField
        name='address'
        label={`${t('address')}*`}
        placeholder={t('address')}
        type='text'
        className='col-span-2'
      />
      <FormField
        name='comments'
        label={`${t('c_and_q')}*`}
        placeholder={t('comms')}
        type='text'
        className='col-span-2'
        textarea
      />
      <Button
        disabled={pending}
        className='bg-[#46442D] h-fit rounded-none m-0 p-0 text-background py-3 px-24 text-sm md:text-base xl:text-lg font-light hover:bg-transparent hover:text-[#46442D] hover:border border shadow-xl w-full col-span-2 md:col-span-1 md:w-fit'
        type='submit'
      >
        {pending ? t('proc') : t('send')}
      </Button>
      <p className='col-span-2 md:col-span-1 text-balance text-center w-full'>
        {message !== null && message}
      </p>
    </form>
  );
}
