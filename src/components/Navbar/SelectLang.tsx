'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useChangeLang } from './hooks/useChangeLang';

export default function SelectLang() {
  const { locale, chnageLang } = useChangeLang();
  return (
    <Select onValueChange={chnageLang} defaultValue={locale}>
      <SelectTrigger className='m-0 p-0 ring-0 shadow-none h-fit outline-none rounded-none px-2 py-1 border-white'>
        <SelectValue
          placeholder='RO'
          className='m-0 p-0 ring-0 shadow-none text-base font-light h-fit outline-none '
        />
      </SelectTrigger>
      <SelectContent className='p-0 m-0 bg-transparent w-fit h-fit text-base font-light text-white rounded-none shadow-none flex flex-col gap-2 pb-2 border-white mt-2 pl-2'>
        <SelectItem
          value='ro'
          className='p-0 m-0 hover:cursor-pointer hover:underline'
        >
          RO
        </SelectItem>
        <SelectItem
          value='ru'
          className='p-0 m-0 hover:cursor-pointer hover:underline'
        >
          РУ
        </SelectItem>
        <SelectItem
          value='en'
          className='p-0 m-0 hover:cursor-pointer hover:underline'
        >
          EN
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
