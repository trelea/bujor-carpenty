import { cn } from '@/lib/utils';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  className?: string;
  textarea?: boolean;
}

export default function FormField({
  label,
  placeholder,
  type,
  className,
  textarea,
  name,
}: Props) {
  return (
    <div className={cn(`flex flex-col gap-4`, className)}>
      <label
        htmlFor=''
        className='font-medium text-sm md:text-base xl:text-lg text-foreground'
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          className='border w-full bg-transparent text-sm md:text-base xl:text-lg font-light px-2 py-2 md:px-3 md:py-3 outline-none placeholder:text-border shadow-md'
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className='border w-full bg-transparent text-sm md:text-base xl:text-lg font-light px-2 py-2 md:px-3 md:py-3 outline-none placeholder:text-border shadow-md'
          required
        />
      )}
    </div>
  );
}
