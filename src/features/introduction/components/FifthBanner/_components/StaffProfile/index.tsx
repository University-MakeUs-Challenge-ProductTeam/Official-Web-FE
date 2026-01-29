import { FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import Image from 'next/image';

import type { TCentralStaffDTO } from '@/types/staffDto';

import Typography from '@/components/common/Typography';

type TStaffProfileProps = {
  profileData: TCentralStaffDTO;
};

const StaffProfile = ({ profileData }: TStaffProfileProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative flex flex-col gap-6 overflow-hidden rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-3xl transition-all hover:border-main-green/30 hover:bg-main-green/5"
    >
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-main-green to-transparent opacity-0 blur-[1px] transition-all duration-500 group-hover:opacity-60" />

      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        {profileData.profileImageUrl ? (
          <Image
            alt={profileData.nickname}
            src={profileData.profileImageUrl}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-10">
            <span className="text-4xl font-black italic tracking-tighter text-white">UMC</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">No Signal</span>
          </div>
        )}

        {/* Role Badge Overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-block rounded-full bg-main-green px-4 py-1 text-[10px] font-black italic tracking-widest text-black">{profileData.role}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <Typography as="h1" className="text-3xl font-black italic leading-none tracking-tighter text-white transition-colors group-hover:text-main-green">
            {profileData.nickname}
          </Typography>
          <Typography as="p" className="text-xs font-black uppercase tracking-widest text-white/20">
            {profileData.school}
          </Typography>
        </div>

        <Typography as="p" className="line-clamp-5 min-h-[4.5rem] text-sm font-medium leading-relaxed text-white/70 transition-colors group-hover:text-white">
          {profileData.introduction}
        </Typography>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex gap-3">
            {profileData.profileLinkList.map((link) => {
              const isEmail = link.linkType === 'EMAIL';
              const Icon = isEmail ? MdAlternateEmail : FaGithub;
              const href = isEmail ? `mailto:${link.linkUrl}` : `https://github.com/${link.linkUrl}`;

              return (
                <a
                  key={link.profileLinkId}
                  href={href}
                  target={isEmail ? '_top' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex size-10 items-center justify-center rounded-full border border-white/5 bg-white/5 text-white/40 transition-all hover:border-main-green/30 hover:bg-main-green/10 hover:text-main-green"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <div className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </motion.div>
  );
};

export default StaffProfile;
