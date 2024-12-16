'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { changePath } from './actions/redirect';
import { useGetDefaultValue } from './hooks/useGetDeafaultValue';
import { useTranslations } from 'next-intl';

export default function SelectNavbar({
  black,
  closeModal,
}: {
  black?: boolean;
  closeModal?: () => void;
}) {
  const t = useTranslations('navbar');
  const { value } = useGetDefaultValue();

  return (
    <Select
      onValueChange={(v) => {
        changePath(v);
        if (typeof closeModal === 'function') closeModal();
      }}
      value={value}
      defaultValue={value}
    >
      <SelectTrigger className='border-none m-0 p-0 ring-0 shadow-none h-fit outline-none'>
        <SelectValue
          placeholder={t('personalize')}
          className='border-none m-0 p-0 ring-0 shadow-none text-base font-light h-fit outline-none'
        />
      </SelectTrigger>
      <SelectContent
        className={`p-0 m-0 bg-transparent w-fit h-fit text-base font-light ${
          black ? 'text-foreground' : 'text-white'
        } rounded-none border-none shadow-none flex flex-col mt-2`}
      >
        <SelectItem
          value='libraries'
          className='p-0 m-0 hover:cursor-pointer hover:underline'
          onClick={closeModal}
        >
          {t('libraries')}
        </SelectItem>

        <SelectItem
          value='furnitures'
          className='p-0 m-0 hover:cursor-pointer hover:underline'
          onClick={closeModal}
        >
          {t('furnitures')}
        </SelectItem>
        <SelectItem
          value='custom'
          className='p-0 m-0 hover:cursor-pointer hover:underline'
          onClick={closeModal}
        >
          {t('custom')}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
