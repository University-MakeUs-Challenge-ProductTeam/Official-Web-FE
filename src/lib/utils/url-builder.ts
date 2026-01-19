type TQueryParams = Record<string, string | number | boolean | undefined | null>;

/**
 * URL과 쿼리 파라미터를 조합하여 완성된 URL을 생성합니다.
 * @param baseUrl - 기본 URL 경로
 * @param params - 쿼리 파라미터 객체
 * @returns 완성된 URL 문자열
 */
export function buildUrl(baseUrl: string, params?: TQueryParams): string {
  if (!params) return baseUrl;

  const queryString = Object.entries(params)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');

  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * 경로 파라미터를 포함한 URL을 생성합니다.
 * @param template - URL 템플릿 (예: '/users/:userId/posts/:postId')
 * @param pathParams - 경로 파라미터 객체
 * @param queryParams - 쿼리 파라미터 객체 (선택)
 * @returns 완성된 URL 문자열
 */
export function buildUrlWithParams(template: string, pathParams: Record<string, string | number>, queryParams?: TQueryParams): string {
  let url = template;

  Object.entries(pathParams).forEach(([key, value]) => {
    url = url.replace(`:${key}`, String(value));
  });

  return buildUrl(url, queryParams);
}
