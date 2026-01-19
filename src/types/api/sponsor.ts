/**
 * 후원사 아이템 DTO
 */
export type TSponsorItemDTO = {
  /** 후원사 설명 */
  description: string;
  /** 로고 URL */
  logoUrl: string;
  /** 후원사 ID */
  sponsorId: number;
  /** 후원사 제목 */
  title: string;
  /** 후원사 웹사이트 URL */
  url: string;
};

/**
 * 후원사 리스트 응답 타입
 */
export type TSponsorListData = {
  /** 후원사 리스트 */
  sponsorList: TSponsorItemDTO[];
};

/**
 * @deprecated TSponsorType 대신 TSponsorListData를 사용하세요
 */
export type TSponsorType = TSponsorListData;
