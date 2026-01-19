import type { QueryKey, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

type ResponseError = AxiosError<{
  error: string;
  message: string;
  statusCode: number;
}>;

type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<UseMutationOptions<TData, ResponseError, TVariables, unknown>, 'mutationFn'>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>, 'queryKey'>;

type CommonResponse<T> = {
  code: string;
  isSuccess: boolean;
  message: string;
  result: T;
};

export type { CommonResponse, ResponseError, UseMutationCustomOptions, UseQueryCustomOptions };
