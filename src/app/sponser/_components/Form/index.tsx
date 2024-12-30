'use client';

import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import LoadingSpinner from '@/shared/components/LoadingSpinner';
import TextArea from '@/shared/components/TextArea';
import Typography from '@/shared/components/Typography';
import usePostSponsorResponse from '@/shared/hooks/queries/usePostSponsorResponse';

const sponsorFormSchema = z.object({
  applicationName: z.string().min(1, { message: '성함을 입력해 주세요.' }),
  contactInfo: z.string().min(1, { message: '연락처를 입력해 주세요.' }),
  email: z.string().email({ message: '유효한 이메일 주소를 입력해 주세요.' }),
  organizationName: z.string().min(1, { message: '기관명을 입력해 주세요.' }),
  logoImage: z.string().url({ message: '유효한 URL을 입력해 주세요.' }),
  description: z.string().min(1, { message: '기관 설명을 입력해 주세요.' }),
  link: z.string().url({ message: '유효한 URL을 입력해 주세요.' }),
});

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      applicationName: '',
      contactInfo: '',
      email: '',
      organizationName: '',
      description: '',
      link: '',
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
        organizationName: data.organizationName,
      },
      {
        onSuccess: () => {
          // alert('후원신청 해주셔서 감사합니다.');
          reset();
        },
      },
    );
  };

  return (
    <form className="flex flex-col items-end gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <Input id="applicationName" label="성함" register={register} errors={errors} required />
        {errors.applicationName?.message && (
          <Typography size="caption" className="mt-2 text-red-500">
            * {typeof errors.applicationName.message === 'string' ? errors.applicationName.message : ''}
          </Typography>
        )}
      </div>
      <div className="w-full">
        <Input id="contactInfo" label="연락처" register={register} errors={errors} required />
        {errors.contactInfo?.message && (
          <Typography size="caption" className="mt-2 text-red-500">
            * {typeof errors.contactInfo.message === 'string' ? errors.contactInfo.message : ''}
          </Typography>
        )}
      </div>
      <div className="w-full">
        <Input id="email" label="이메일" type="email" register={register} errors={errors} required />
        {errors.email?.message && (
          <Typography size="caption" className="mt-2 text-red-500">
            * {typeof errors.email.message === 'string' ? errors.email.message : ''}
          </Typography>
        )}
      </div>
      <div className="w-full">
        <Input id="organizationName" label="기관명" register={register} errors={errors} required />
        {errors.organizationName?.message && (
          <Typography size="caption" className="mt-2 text-red-500">
            * {typeof errors.organizationName.message === 'string' ? errors.organizationName.message : ''}
          </Typography>
        )}
      </div>
      {/* <div className="w-full"> */}
      {/*  <Input id="logoImage" label="기관로고" register={register} errors={errors} required /> */}
      {/*  {errors.logoImage && ( */}
      {/*    <Typography size="caption" className="mt-2 text-red-500"> */}
      {/*      * {String(errors.logoImage.message)} */}
      {/*    </Typography> */}
      {/*  )} */}
      {/* </div> */}
      <div className="w-full">
        <TextArea id="description" label="기관설명" register={register} errors={errors} required />
        {errors.description?.message && (
          <Typography size="caption" className="mt-2 text-red-500">
            * {typeof errors.description.message === 'string' ? errors.description.message : ''}
          </Typography>
        )}
      </div>
      <div className="w-full">
        <Input id="link" label="기관링크" register={register} errors={errors} required />
        {errors.link?.message && (
          <Typography size="caption" className="mt-2 text-red-500">
            * {typeof errors.link.message === 'string' ? errors.link.message : ''}
          </Typography>
        )}
      </div>
      <div className="my-10 w-[160px]">
        <Button disabled={isPending} type="submit" variant="outline">
          {isPending ? <LoadingSpinner /> : '제출하기'}
        </Button>
      </div>
    </form>
  );
}

export default Form;
