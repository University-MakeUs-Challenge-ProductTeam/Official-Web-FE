import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

type TPaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
  pageGroup: number;
  pagesPerGroup: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages, pageGroup, pagesPerGroup, onPageChange }: TPaginationProps) => {
  if (totalPages <= 1) return null;

  const startPage = pageGroup * pagesPerGroup;
  const pagesInGroup = Math.min(pagesPerGroup, totalPages - startPage);

  const handlePrevious = () => {
    onPageChange(Math.max(currentPage - 1, 0));
  };

  const handleNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages - 1));
  };

  return (
    <nav aria-label="페이지네이션" className="mt-20 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={handlePrevious}
        disabled={currentPage === 0}
        aria-label="이전 페이지"
        className="rounded-full bg-white/5 p-3 text-main-green transition-colors hover:bg-main-green/10 disabled:opacity-20"
      >
        <FaAngleLeft aria-hidden="true" />
      </button>

      <div className="flex gap-2" role="group" aria-label="페이지 목록">
        {Array.from({ length: pagesInGroup }, (_, index) => {
          const pageIndex = startPage + index;
          return (
            <button
              key={pageIndex}
              type="button"
              aria-label={`${pageIndex + 1}페이지로 이동`}
              aria-current={pageIndex === currentPage ? 'page' : undefined}
              className={`size-10 rounded-full text-sm font-black italic transition-all ${
                pageIndex === currentPage ? 'bg-main-green text-black shadow-[0_0_15px_#52E560]' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
              } `}
              onClick={() => onPageChange(pageIndex)}
            >
              {pageIndex + 1}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        aria-label="다음 페이지"
        className="rounded-full bg-white/5 p-3 text-main-green transition-colors hover:bg-main-green/10 disabled:opacity-20"
      >
        <FaAngleRight aria-hidden="true" />
      </button>
    </nav>
  );
};

export default Pagination;
