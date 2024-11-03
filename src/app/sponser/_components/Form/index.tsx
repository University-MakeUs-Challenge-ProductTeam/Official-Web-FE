'use client';

import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import LoadingSpinner from '@/shared/components/LoadingSpinner';
import TextArea from '@/shared/components/TextArea';
import usePostSponsorResponse from '@/shared/hooks/queries/usePostSponsorResponse';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      applicationName: null,
      contactInfo: null,
      email: null,
      organizationName: null,
      logoImage: null,
      description: null,
      link: null,
    },
  });

  const { mutate: applySponsor, isPending } = usePostSponsorResponse();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues, event) => {
    event?.preventDefault();
    applySponsor(
      {
        applicationName: data.applicationName,
        contactInfo: data.contactInfo,
        description: data.description,
        email: data.email,
        link: data.link,
        logoImage: data.logoImage,
        organizationName: data.organizationName,
      },
      {
        onSuccess: () => {
          // eslint-disable-next-line no-alert
          alert('후원신청 해주셔서 감사합니다.');
          reset();
        },
      },
    );
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
        <Button disabled={isPending} type="submit" variant="outline">
          {isPending ? <LoadingSpinner /> : '제출하기'}
        </Button>
      </div>
    </form>
  );
}

export default Form;
