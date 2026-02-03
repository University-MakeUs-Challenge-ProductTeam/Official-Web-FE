import type { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import type { IconType } from 'react-icons';

import Typography from '@/components/common/Typography';

import cn from '@/lib/utils/style';

type TTextAreaProps<TFieldValues extends FieldValues = FieldValues> = {
  className?: string;
  disabled?: boolean;
  errors: FieldErrors<TFieldValues>;
  formatPrice?: boolean;
  icon?: IconType;
  id: Path<TFieldValues>;
  label: string;
  register: UseFormRegister<TFieldValues>;
  required?: boolean;
  rows?: number;
};

const TextArea = <TFieldValues extends FieldValues = FieldValues>({
  className,
  rows = 20,
  formatPrice,
  disabled,
  errors,
  icon: Icon,
  id,
  label,
  register,
  required,
}: TTextAreaProps<TFieldValues>) => {
  return (
    <div className={cn(`relative w-full`, className)}>
      {Icon && <Icon size={24} className="absolute left-2 top-5 text-neutral-700" aria-hidden="true" />}
      <textarea
        rows={rows}
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        aria-invalid={errors[id] ? 'true' : 'false'}
        aria-required={required}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
        className={`peer w-full resize-none rounded-lg border-2 bg-neutral-900 p-4 px-8 pt-6 text-base font-bold text-main-white outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 ${formatPrice ? 'pl-9' : 'pl-4'} ${
          errors[id]
            ? 'border-[#FF5E5E] focus:border-[#FF5E5E] focus:shadow-[0_0_20px_rgba(255,94,94,0.3)]'
            : 'border-surface-700 hover:border-main-green/50 focus:border-main-green focus:shadow-[0_0_20px_rgba(82,229,96,0.3)]'
        } `}
      />
      <label
        htmlFor={id}
        className={`text-md absolute top-5 z-10 origin-[0] -translate-y-3 duration-150 ${formatPrice ? 'left-9' : 'left-4'} peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 ${errors[id] ? 'text-error-500' : 'text-zinc-400'} `}
      >
        <Typography size="caption" color="main-disable">
          {label}
        </Typography>
      </label>
    </div>
  );
};

export default TextArea;
