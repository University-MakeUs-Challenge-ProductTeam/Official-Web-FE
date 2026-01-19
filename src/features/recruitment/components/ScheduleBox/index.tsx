'use client';

import { useState } from 'react';
import { IoSchool } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';

import { QUERY_KEYS } from '@/constants/querykeys/project';

import Typography from '@/components/common/Typography';

import PartAndSkill from '../PartAndSkill';
import RecruitmentSchedule from '../RecruitmentSchedule';
import ScheduleDropdown from '../SchoolDropdown';
import StaffBox from '../StaffBox';

import { getRequirements } from '@/lib/api/recruitment';

function ScheduleBox() {
  const [selectedSchool, setSelectedSchool] = useState('');
  const { data: schoolData, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.requirements, selectedSchool],
    queryFn: () => getRequirements({ schoolName: selectedSchool }),
    enabled: selectedSchool !== '',
  });

  return (
    <div className="flex flex-col border-t border-white/5 py-32">
      <div className="mb-20 flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ willChange: 'transform, opacity' }}
          className="flex-1 transform-gpu text-center md:text-left"
        >
          <span className="mb-4 inline-block rounded-full border border-[#52E560]/20 bg-[#52E560]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#52E560]">
            Timeline & Requirements
          </span>
          <h2 className="text-5xl font-black italic leading-[0.8] tracking-tighter text-white md:text-7xl">
            CHOOSE YOUR <br />
            <span className="text-[#52E560]">BATTLEGROUND</span>
          </h2>
          <p className="mt-8 max-w-lg font-medium leading-relaxed text-white/40">
            모집일정 및 파트는 학교별로 상이합니다. <br />
            본인의 학교를 선택하여 UMC의 역사가 시작될 장소를 확인하세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ willChange: 'transform, opacity' }}
          className="group relative z-50 transform-gpu overflow-visible rounded-full p-px"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#52E560] to-transparent opacity-20 transition-all duration-500 group-hover:via-[#52E560]/50" />
          <div className="relative">
            <ScheduleDropdown selectedSchool={selectedSchool} setSelectedSchool={setSelectedSchool} />
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10">
        <AnimatePresence mode="wait">
          {selectedSchool === '' ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden rounded-[60px] border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
            >
              {/* Background Decorative Elements */}
              <div className="absolute left-1/2 top-0 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute bottom-0 left-1/2 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-10">
                  <IoSchool size={80} className="text-white/5" />
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-x-0 bottom-0 -z-10 h-10 rounded-full bg-[#52E560] blur-3xl"
                  />
                </div>
                <Typography className="text-2xl font-black uppercase italic tracking-widest text-white/10">Awaiting Target Location</Typography>
                <div className="mt-4 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="size-1 rounded-full bg-[#52E560]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : isLoading ? (
            <div className="grid gap-10">
              <div className="h-80 animate-pulse rounded-[40px] bg-white/5" />
              <div className="h-64 animate-pulse rounded-[40px] bg-white/5" />
            </div>
          ) : (
            <motion.div key={selectedSchool} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-10">
              <div className="grid gap-10 lg:grid-cols-2">
                <RecruitmentSchedule scheduleData={schoolData?.recruitmentScheduleDTO} />
                <PartAndSkill partSkillData={schoolData?.requirementPartDTOList} />
              </div>
              <StaffBox staffList={schoolData?.staffDTOList} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ScheduleBox;
