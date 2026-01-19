'use client';

import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import usePostSponsorResponse from '@/hooks/queries/usePostSponsorResponse';

import Input from '@/components/common/Input';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import TextArea from '@/components/common/TextArea';
import Typography from '@/components/common/Typography';

import { sponsorFormSchema } from '../../schemas/sponsor-form.schema';

const Form = () => {
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
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)} aria-label="후원 신청 양식">
      {/* 신청자 정보 섹션 */}
      <fieldset className="space-y-6 rounded-xl border border-surface-700 bg-black/30 p-6 backdrop-blur-sm">
        <legend className="text-lg font-bold text-main-green">신청자 정보</legend>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="w-full">
            <Input id="applicationName" label="성함" register={register} errors={errors} required />
            {errors.applicationName?.message && (
              <Typography size="caption" className="mt-2 text-red-500" id="applicationName-error" role="alert">
                * {typeof errors.applicationName.message === 'string' ? errors.applicationName.message : ''}
              </Typography>
            )}
          </div>
          <div className="w-full">
            <Input id="contactInfo" label="연락처" register={register} errors={errors} required />
            {errors.contactInfo?.message && (
              <Typography size="caption" className="mt-2 text-red-500" id="contactInfo-error" role="alert">
                * {typeof errors.contactInfo.message === 'string' ? errors.contactInfo.message : ''}
              </Typography>
            )}
          </div>
        </div>
        <div className="w-full">
          <Input id="email" label="이메일" type="email" register={register} errors={errors} required />
          {errors.email?.message && (
            <Typography size="caption" className="mt-2 text-red-500" id="email-error" role="alert">
              * {typeof errors.email.message === 'string' ? errors.email.message : ''}
            </Typography>
          )}
        </div>
      </fieldset>

      {/* 기관 정보 섹션 */}
      <fieldset className="space-y-6 rounded-xl border border-surface-700 bg-black/30 p-6 backdrop-blur-sm">
        <legend className="text-lg font-bold text-main-green">기관 정보</legend>
        <div className="w-full">
          <Input id="organizationName" label="기관명" register={register} errors={errors} required />
          {errors.organizationName?.message && (
            <Typography size="caption" className="mt-2 text-red-500" id="organizationName-error" role="alert">
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
            <Typography size="caption" className="mt-2 text-red-500" id="description-error" role="alert">
              * {typeof errors.description.message === 'string' ? errors.description.message : ''}
            </Typography>
          )}
        </div>
        <div className="w-full">
          <Input id="link" label="기관링크" register={register} errors={errors} required />
          {errors.link?.message && (
            <Typography size="caption" className="mt-2 text-red-500" id="link-error" role="alert">
              * {typeof errors.link.message === 'string' ? errors.link.message : ''}
            </Typography>
          )}
        </div>
      </fieldset>

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={isPending}
        className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-main-green to-[#3BB54A] px-8 py-4 font-black italic text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(82,229,96,0.6)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <>
            <span className="relative z-10">신청하기</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-main-green to-main-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
