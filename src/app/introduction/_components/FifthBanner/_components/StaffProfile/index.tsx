import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import Image from 'next/image';

import Typography from '@/shared/components/Typography';
import type { TcentralStaffDTO } from '@/shared/types/staffDto';

interface IStaffProfileProps {
  profileData: TcentralStaffDTO;
}

function StaffProfile({ profileData }: IStaffProfileProps) {
  return (
    <div className="flex max-w-[350px] flex-col items-center justify-start gap-5" key={profileData.centralStaffId}>
      {profileData.profileImageUrl ? (
        <div className="relative flex size-full min-h-[300px] w-full flex-1">
          <Image alt="StaffProfileImage" src={profileData.profileImageUrl} layout="contain" fill className="rounded-xl object-cover" />
        </div>
      ) : (
        <div className="size-[240px] rounded-xl bg-neutral-700" />
      )}
      <div className="flex flex-row gap-2">
        <Typography as="h5" size="text-sm" color="main-green" className="rounded-lg bg-[#4A4A4A] px-3 py-2 font-bold">
          {profileData.role}
        </Typography>
        <Typography as="h5" size="text-sm" className="rounded-lg bg-[#4A4A4A] px-3 py-2 font-bold text-[#C0C0C0]">
          {profileData.school}
        </Typography>
      </div>
      <Typography as="h1" size="title-smd" color="main-white">
        {profileData.nickname}
      </Typography>
      <Typography
        as="p"
        size="text-sm"
        className="h-[140px] overflow-y-scroll text-[#A2A2A2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1"
      >
        {profileData.introduction}
      </Typography>
      <div className="flex flex-row gap-3">
        {profileData.profileLinkList.map((link) =>
          link.linkType === 'EMAIL' ? (
            <a target="_top" href={`mailto:${link.linkUrl}`} className="rounded-full bg-[#D9D9D9] p-2" key={link.profileLinkId}>
              <MdAlternateEmail size={23} color="#000000" />
            </a>
          ) : (
            <a target="_blank" type="button" href={`https://github.com/${link.linkUrl}`} className="rounded-full bg-[#D9D9D9] p-2" key={link.profileLinkId}>
              <FaGithub size={23} color="#000000" />
            </a>
          ),
        )}
      </div>
    </div>
  );
}

export default StaffProfile;
