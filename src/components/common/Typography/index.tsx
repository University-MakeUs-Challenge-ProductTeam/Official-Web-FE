import type { ElementType, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import cn from '@/lib/utils/style';
import type { ColorKey } from '@/models/color';
import type { FontKey } from '@/models/font';

import { cva } from 'class-variance-authority';

export const TypographyVariants = cva<{
  color: Record<ColorKey, string>;
  size: Record<FontKey, string>;
}>('', {
  variants: {
    size: {
      'title-xl': 'text-title-xl',
      'title-lg': 'text-title-lg',
      'title-md': 'text-title-md',
      'title-smd': 'text-title-smd',
      'title-sm': 'text-title-sm',
      'text-lg': 'text-text-lg',
      'text-md': 'text-text-md',
      'text-sm': 'text-text-sm',
      'caption': 'text-caption',
    },
    color: {
      'main-green': 'text-main-green',
      'main-disable': 'text-main-disable',
      'main-black': 'text-main-black',
      'main-white': 'text-main-white',
      'main-pink': 'text-main-pink',
      'error-50': 'text-error-50',
      'error-100': 'text-error-100',
      'error-200': 'text-error-200',
      'error-300': 'text-error-300',
      'error-400': 'text-error-400',
      'error-500': 'text-error-500',
      'error-600': 'text-error-600',
      'error-700': 'text-error-700',
      'error-800': 'text-error-800',
      'surface-50': 'text-surface-50',
      'surface-100': 'text-surface-100',
      'surface-200': 'text-surface-200',
      'surface-300': 'text-surface-300',
      'surface-400': 'text-surface-400',
      'surface-500': 'text-surface-500',
      'surface-600': 'text-surface-600',
      'surface-700': 'text-surface-700',
      'surface-800': 'text-surface-800',
      'neutral-000': 'text-neutral-000',
      'neutral-100': 'text-neutral-100',
      'neutral-200': 'text-neutral-200',
      'neutral-300': 'text-neutral-300',
      'neutral-400': 'text-neutral-400',
      'neutral-500': 'text-neutral-500',
      'neutral-600': 'text-neutral-600',
      'neutral-700': 'text-neutral-700',
      'neutral-800': 'text-neutral-800',
      'orange-50': 'text-orange-50',
      'orange-100': 'text-orange-100',
      'orange-200': 'text-orange-200',
      'orange-300': 'text-orange-300',
      'orange-400': 'text-orange-400',
      'orange-500': 'text-orange-500',
      'orange-600': 'text-orange-600',
      'orange-700': 'text-orange-700',
      'orange-800': 'text-orange-800',
      'purple-50': 'text-purple-50',
      'purple-100': 'text-purple-100',
      'purple-200': 'text-purple-200',
      'purple-300': 'text-purple-300',
      'purple-400': 'text-purple-400',
      'purple-500': 'text-purple-500',
      'purple-600': 'text-purple-600',
      'purple-700': 'text-purple-700',
      'purple-800': 'text-purple-800',
      'yellow-100': 'text-yellow-100',
      'profile-coral': 'text-profile-coral',
      'profile-dark-blue': 'text-profile-dark-blue',
      'profile-sky-blue': 'text-profile-sky-blue',
      'profile-violet': 'text-profile-violet',
      'profile-green': 'text-profile-green',
      'blue-100': 'text-blue-100',
      'blue-200': 'text-blue-200',
      'blue-300': 'text-blue-300',
    },
  },
  defaultVariants: {
    size: 'text-md',
    color: 'main-black',
  },
});

type TTypographyProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType;
  color?: ColorKey;
  size?: FontKey;
};

/**
 * Typography 컴포넌트
 * @param children 표시할 글씨를 입력합니다.
 * @param as 태그를 변경합니다.
 * @param color 글씨의 색상을 선택합니다.
 * @param size 글씨의 크기, 자간, 줄간 등의 스타일을 지정합니다.
 */
const Typography = forwardRef<HTMLDivElement, TTypographyProps>(({ size, className, children, color, as, ...props }, ref) => {
  const Component = as || 'div';

  return (
    <Component ref={ref} className={cn(TypographyVariants({ size, color }), className)} {...props}>
      {children}
    </Component>
  );
});
Typography.displayName = 'typography';

export default Typography;
