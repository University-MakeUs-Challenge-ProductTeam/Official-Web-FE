import React from 'react';

import Typography from '@/shared/components/Typography';

interface IDescriptionBoxProps {
  description: string;
}

function DescriptionBox({ description }: IDescriptionBoxProps) {
  return (
    <div className="flex-3 flex w-full flex-col gap-5 rounded-xl border border-solid border-[#3A3A3A] bg-[#1B1B1B] p-8">
      <Typography size="title-sm" className="text-[#9D9D9D]">
        프로젝트 설명
      </Typography>
      <Typography size="text-lg" className="flex-1 text-[#CFCFCF]">
        {description}
      </Typography>
    </div>
  );
}

export default DescriptionBox;
