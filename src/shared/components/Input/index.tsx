import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import type { IconType } from 'react-icons';

import Typography from '@/shared/components/Typography';
import cn from '@/shared/utils/style';

interface IInputProps {
  className?: string;
  disabled?: boolean;
  errors: FieldErrors;
  formatPrice?: boolean;
  icon?: IconType;
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  type?: string;
}

function Input({ className, formatPrice, disabled, errors, icon: Icon, id, label, register, required, type }: IInputProps) {
  return (
    <div className={cn(`relative w-full`, className)}>
      {Icon && <Icon size={24} className="absolute left-2 top-5 text-neutral-700" />}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`py-38 peer w-full rounded-md border-2 bg-[#1B1B1B] p-4 px-32 pt-6 font-bold text-main-white outline-none transition disabled:cursor-not-allowed disabled:opacity-70 ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? 'border-[#FF5E5E]' : 'border-[#3A3A3A]'} ${errors[id] ? 'focus:border-[#FF5E5E]' : 'focus:border-[#3A3A3A]'} `}
      />
      <label
        className={`text-md absolute top-5 z-10 origin-[0] -translate-y-3 duration-150 ${formatPrice ? 'left-9' : 'left-4'} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 ${errors[id] ? 'text-[#FF5E5E]' : 'text-zinc-400'} `}
      >
        <Typography size="caption" color="main-disable">
          {label}
        </Typography>
      </label>
    </div>
  );
}

export default Input;
