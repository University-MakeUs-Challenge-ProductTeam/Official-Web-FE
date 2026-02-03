import type { UseMutationCustomOptions } from '@/types/common/query';

import useSingleRequest from '@/hooks/useSingleRequest';

import { postSponsor } from '@/lib/api/sponsor';

import { useMutation } from '@tanstack/react-query';

const useSubmitSponsorMutation = (mutationOptions?: UseMutationCustomOptions) => {
  return useMutation({
    mutationFn: useSingleRequest(postSponsor),
    ...mutationOptions,
  });
};

export default useSubmitSponsorMutation;
