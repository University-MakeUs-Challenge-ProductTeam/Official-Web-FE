'use client';

import { FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function RedesignFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/5 bg-black py-20">
      {/* Background radial glow */}
      <div className="absolute -bottom-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#52E560]/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm space-y-4">
            <h3 className="text-3xl font-black italic tracking-tighter text-[#52E560]">UMC</h3>
            <p className="text-sm leading-relaxed text-white/50">
              University MakeUs Challenge는 대학생들이 기획, 디자인, 개발을 아울러 실제 런칭 가능한 서비스를 만드는 대학생 개발 연합 동아리입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-20">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Navigation</h4>
              <ul className="space-y-2 text-xs text-white/40">
                <li>
                  <a href="/introduction" className="hover:text-[#52E560]">
                    소개
                  </a>
                </li>
                <li>
                  <a href="/project" className="hover:text-[#52E560]">
                    프로젝트
                  </a>
                </li>
                <li>
                  <a href="/sponser" className="hover:text-[#52E560]">
                    후원사
                  </a>
                </li>
                <li>
                  <a href="/recruitment" className="hover:text-[#52E560]">
                    모집안내
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Social</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/uni_makeus_challenge" className="text-xl text-white/40 transition-colors hover:text-[#52E560]">
                  <FaInstagram />
                </a>
                <a href="mailto:umc.smu@gmail.com" className="text-xl text-white/40 transition-colors hover:text-[#52E560]">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/5 pt-10 text-[10px] uppercase tracking-widest text-white/20 md:flex-row">
          <p>© 2026 University MakeUs Challenge. Build whatever you want.</p>
          <p className="mt-4 md:mt-0">Design by Antigravity AI</p>
        </div>
      </div>
    </footer>
  );
}
