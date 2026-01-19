import { useQuery } from '@tanstack/react-query';

import type { EventList } from '@/types/dtos/academy';
import { QUERY_KEYS } from '@/constants/querykeys/project';

import { getMajorActivity } from '@/lib/api/main';

interface IUseGetMainActivity {
  eventType: EventList;
}

function useGetMainActivity({ eventType }: IUseGetMainActivity) {
  return useQuery({
    queryFn: () => getMajorActivity({ eventType }),
    queryKey: [QUERY_KEYS.mainActivity, eventType],
  });
}

export default useGetMainActivity;
