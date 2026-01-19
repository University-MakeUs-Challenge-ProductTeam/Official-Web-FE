import { useState } from 'react';

type TUseProjectPaginationProps = {
  pageSize?: number;
  pagesPerGroup?: number;
  totalItems: number;
};

type TUseProjectPaginationReturn = {
  endPage: number;
  handleNextGroup: () => void;
  handlePageChange: (newPage: number) => void;
  handlePrevGroup: () => void;
  page: number;
  pageGroup: number;
  pageSize: number;
  pagesPerGroup: number;
  startPage: number;
  totalPages: number;
};

export const useProjectPagination = ({ totalItems, pageSize = 12, pagesPerGroup = 5 }: TUseProjectPaginationProps): TUseProjectPaginationReturn => {
  const [page, setPage] = useState(0);
  const [pageGroup, setPageGroup] = useState(0);

  const totalPages = Math.ceil(totalItems / pageSize);
  const startPage = pageGroup * pagesPerGroup;
  const endPage = Math.min(startPage + pagesPerGroup, totalPages);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    if (newPage < startPage) {
      setPageGroup(pageGroup - 1);
    } else if (newPage >= startPage + pagesPerGroup) {
      setPageGroup(pageGroup + 1);
    }
  };

  const handlePrevGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(pageGroup - 1);
      setPage((pageGroup - 1) * pagesPerGroup);
    }
  };

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      setPageGroup(pageGroup + 1);
      setPage((pageGroup + 1) * pagesPerGroup);
    }
  };

  return {
    page,
    pageGroup,
    pageSize,
    pagesPerGroup,
    startPage,
    endPage,
    totalPages,
    handlePageChange,
    handlePrevGroup,
    handleNextGroup,
  };
};
