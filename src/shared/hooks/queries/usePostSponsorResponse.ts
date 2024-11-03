import { useMutation } from '@tanstack/react-query';

import { postSponsor } from '@/shared/api/sponsor';
import useSingleRequest from '@/shared/hooks/useSingleRequest';
import type { UseMutationCustomOptions } from '@/shared/types/query/common';

function usePostSponsorResponse(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: useSingleRequest(postSponsor),
    ...mutationOptions,
  });
}

export default usePostSponsorResponse;
