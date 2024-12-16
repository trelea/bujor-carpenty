import React from 'react';

export const useDebouncer = (ms: number) => {
  const [open, setOpen] = React.useState<boolean>(false);

  let timer: NodeJS.Timeout;

  const closeModal = () => {
    clearTimeout(timer);
    timer = setTimeout(() => setOpen((_: boolean) => !_), ms);
  };

  return { open, setOpen, closeModal };
};
