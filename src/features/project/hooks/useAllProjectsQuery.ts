import { getAllProjects } from '@/lib/api/project';
import { queryKeys } from '@/lib/query';

import { useQuery } from '@tanstack/react-query';

const useAllProjectsQuery = () => {
  return useQuery({
    queryFn: getAllProjects,
    queryKey: queryKeys.projects.all,
  });
};

export default useAllProjectsQuery;
