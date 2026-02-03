'use client';

import type React from 'react';

import cn from '@/lib/utils/style';

type TContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * @param children 내부에 들어갈 내용을 정의할 수 있습니다.
 * @param className 추가적인 스타일링 속성 또한 정의할 수 있습니다.
 * @constructor
 */
const Container = ({ children, className }: TContainerProps) => {
  return <div className={cn(`mx-auto px-4 sm:px-2 md:px-10 xl:px-20`, className)}>{children}</div>;
};

export default Container;
