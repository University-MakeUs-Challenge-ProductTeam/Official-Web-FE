'use client';

import { FaEnvelope, FaInstagram } from 'react-icons/fa6';

const RedesignFooter = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/5 bg-black py-20">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute -bottom-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-main-green/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand Section */}
          <div className="flex max-w-sm flex-col items-start space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-4xl font-black italic tracking-tighter text-main-green">UMC</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30">University MakeUs Challenge</p>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              대학생들이 기획, 디자인, 개발을 아울러 실제 런칭 가능한 서비스를 만드는 대학생 개발 연합 동아리입니다.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            {/* Navigation */}
            <nav className="flex flex-col space-y-6" aria-label="푸터 네비게이션">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
              <ul className="flex flex-col space-y-3 text-sm font-medium text-white/40">
                <li>
                  <a href="/introduction" className="transition-colors hover:text-white">
                    소개
                  </a>
                </li>
                <li>
                  <a href="/project" className="transition-colors hover:text-white">
                    프로젝트
                  </a>
                </li>
                <li>
                  <a href="/sponser" className="transition-colors hover:text-white">
                    후원사
                  </a>
                </li>
                <li>
                  <a href="/recruitment" className="transition-colors hover:text-white">
                    모집안내
                  </a>
                </li>
              </ul>
            </nav>

            {/* Social */}
            <div className="flex flex-col space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Social</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/uni_makeus_challenge"
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all hover:border-main-green hover:bg-main-green hover:text-black"
                  aria-label="인스타그램"
                >
                  <FaInstagram aria-hidden="true" size={18} />
                </a>
                <a
                  href="mailto:umc.smu@gmail.com"
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all hover:border-main-green hover:bg-main-green hover:text-black"
                  aria-label="이메일"
                >
                  <FaEnvelope aria-hidden="true" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-10 text-[10px] uppercase tracking-widest text-white/20 md:flex-row">
          <p>© 2026 University MakeUs Challenge. Build whatever you want.</p>
          <p>Designed by UMC Product Team.</p>
        </div>
      </div>
    </footer>
  );
};

export default RedesignFooter;
