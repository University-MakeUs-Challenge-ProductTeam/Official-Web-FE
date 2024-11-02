import { useQuery } from '@tanstack/react-query';

import { getMajorActivity } from '@/shared/api/main';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';
import type { EventList } from '@/shared/types/dtos/academy';

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
