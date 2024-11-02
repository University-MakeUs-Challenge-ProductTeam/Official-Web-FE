import { useQuery } from '@tanstack/react-query';

import { getMajorActivity } from '@/shared/api/activity';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';
import type { EventList } from '@/shared/types/dtos/academy';

function useGetMainActivity({ eventType }: { eventType: EventList }) {
  return useQuery({
    queryFn: () => getMajorActivity({ eventType }),
    queryKey: [QUERY_KEYS.mainActivity, eventType],
  });
}

export default useGetMainActivity;
