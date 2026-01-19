import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import cn from '@/lib/utils/style';

const FlexVariants = cva('flex', {
  variants: {
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    direction: {
      'row': 'flex-row',
      'column': 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});

type TFlexProps = VariantProps<typeof FlexVariants> & {
  children: React.ReactNode;
  className?: string;
};

/**
 * Flex 컴포넌트
 * @param children Flex 박스 내부의 컨텐츠를 작성합니다.
 * @param align Flex align-items 속성을 지정합니다.
 * @param justify Flex justify-content 속성을 지정합니다.
 * @param direction Flex 방향을 설정합니다.
 * @param className 추가 스타일링에 대한 코드를 작성합니다.
 * @constructor
 */
const Flex = ({ children, align, justify, direction, className }: TFlexProps) => {
  return <div className={cn(FlexVariants({ align, justify, direction }), className)}>{children}</div>;
};

export default Flex;
