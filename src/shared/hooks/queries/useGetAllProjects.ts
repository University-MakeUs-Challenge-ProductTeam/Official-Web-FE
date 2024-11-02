import { useQuery } from '@tanstack/react-query';

import { getAllProject } from '@/shared/api/main';
import { QUERY_KEYS } from '@/shared/constants/querykeys/project';

function useGetAllProjects() {
  return useQuery({
    queryFn: getAllProject,
    queryKey: [QUERY_KEYS.allProjects],
  });
}

export default useGetAllProjects;
