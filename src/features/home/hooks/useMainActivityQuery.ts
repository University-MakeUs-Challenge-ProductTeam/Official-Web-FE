import type { EventList } from '@/types/academy/event';

import { getMainActivity } from '@/lib/api/activity';
import { queryKeys } from '@/lib/query';

import { useQuery } from '@tanstack/react-query';

type MainActivityQueryParams = {
  eventType: EventList;
};

const useMainActivityQuery = ({ eventType }: MainActivityQueryParams) => {
  return useQuery({
    queryFn: () => getMainActivity({ eventType }),
    queryKey: queryKeys.main.activity(eventType),
  });
};

export default useMainActivityQuery;
