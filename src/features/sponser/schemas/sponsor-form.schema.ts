import { z } from 'zod';

export const sponsorFormSchema = z.object({
  applicationName: z.string().min(1, { message: '성함을 입력해 주세요.' }),
  contactInfo: z.string().min(1, { message: '연락처를 입력해 주세요.' }),
  email: z.string().email({ message: '유효한 이메일 주소를 입력해 주세요.' }),
  organizationName: z.string().min(1, { message: '기관명을 입력해 주세요.' }),
  logoImage: z.string().url({ message: '유효한 URL을 입력해 주세요.' }),
  description: z.string().min(1, { message: '기관 설명을 입력해 주세요.' }),
  link: z.string().url({ message: '유효한 URL을 입력해 주세요.' }),
});

export type TSponsorFormValues = z.infer<typeof sponsorFormSchema>;
