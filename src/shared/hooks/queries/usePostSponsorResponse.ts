import { useMutation } from '@tanstack/react-query';

import { postSponsor } from '@/shared/api/sponsor';
import type { UseMutationCustomOptions } from '@/shared/types/query/common';

function usePostSponsorResponse(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSponsor,
    ...mutationOptions,
  });
}

export default usePostSponsorResponse;
