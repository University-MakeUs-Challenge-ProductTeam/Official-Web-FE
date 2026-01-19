import { useMutation } from '@tanstack/react-query';

import type { UseMutationCustomOptions } from '@/types/query/common';

import useSingleRequest from '@/hooks/useSingleRequest';

import { postSponsor } from '@/lib/api/sponsor';

function usePostSponsorResponse(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: useSingleRequest(postSponsor),
    ...mutationOptions,
  });
}

export default usePostSponsorResponse;
