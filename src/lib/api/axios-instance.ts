import { env } from '@/lib/env';

import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) =>
    // 요청 전 처리 (예: 토큰 추가)
    // const token = localStorage.getItem('token');
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    config,
  (error: AxiosError) => Promise.reject(error),
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // 에러 응답 처리
    /* eslint-disable no-console */
    if (error.response) {
      // 서버가 응답을 반환한 경우
      const { status } = error.response;

      switch (status) {
        case 400:
          console.error('잘못된 요청입니다.');
          break;
        case 401:
          console.error('인증이 필요합니다.');
          // 로그인 페이지로 리다이렉트
          break;
        case 403:
          console.error('접근 권한이 없습니다.');
          break;
        case 404:
          console.error('요청한 리소스를 찾을 수 없습니다.');
          break;
        case 500:
          console.error('서버 오류가 발생했습니다.');
          break;
        default:
          console.error('알 수 없는 오류가 발생했습니다.');
      }
    } else if (error.request) {
      // 요청은 전송되었으나 응답을 받지 못한 경우
      console.error('서버로부터 응답이 없습니다.');
    } else {
      // 요청 설정 중 오류가 발생한 경우
      console.error('요청 설정 중 오류가 발생했습니다:', error.message);
    }
    /* eslint-enable no-console */

    return Promise.reject(error);
  },
);
