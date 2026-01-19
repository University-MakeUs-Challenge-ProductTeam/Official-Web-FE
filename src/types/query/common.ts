import type { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { ApiResponse } from '../common/response';

type ResponseError = AxiosError<{
  error: string;
  message: string;
  statusCode: number;
}>;

type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<UseMutationOptions<TData, ResponseError, TVariables, unknown>, 'mutationFn'>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>, 'queryKey'>;

/**
 * @deprecated CommonResponse 대신 ApiResponse<T>를 사용하세요
 */
type CommonResponse<T> = ApiResponse<T>;

export type { CommonResponse, ResponseError, UseMutationCustomOptions, UseQueryCustomOptions };
