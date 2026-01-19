import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/querykeys/project';

import { getAllProject } from '@/lib/api/main';

function useGetAllProjects() {
  return useQuery({
    queryFn: getAllProject,
    queryKey: [QUERY_KEYS.allProjects],
  });
}

export default useGetAllProjects;
