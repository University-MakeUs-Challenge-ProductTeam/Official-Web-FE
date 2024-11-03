'use client';

import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import TextArea from '@/shared/components/TextArea';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues, event) => {
    event?.preventDefault();
  };

  return (
    <form className="flex flex-col items-end gap-8" onSubmit={handleSubmit(onSubmit)}>
      <Input id="applicationName" label="성함" register={register} errors={errors} required />
      <Input id="contactInfo" label="연락처" register={register} errors={errors} required />
      <Input id="email" label="이메일" type="email" register={register} errors={errors} required />
      <Input id="organizationName" label="기관명" register={register} errors={errors} required />
      <Input id="logoImage" label="기관로고" register={register} errors={errors} required />
      <TextArea id="description" label="기관설명" register={register} errors={errors} required />
      <Input id="link" label="기관링크" register={register} errors={errors} required />
      <div className="my-10 w-[160px]">
        <Button type="submit" variant="outline">
          제출하기
        </Button>
      </div>
    </form>
  );
}

export default Form;
