import { queryOptions } from '@tanstack/react-query';

import type { TCentralEventDTO } from '@/types/eventDtos';
import type { TPlatformName } from '@/types/projectDto';

import { queryKeys } from './query-keys';

import { getCentralEvent } from '@/lib/api/event';
import { getGenerations, getProjectDetail, getProjectList, getReleasedProjectList } from '@/lib/api/project';
import { getActivities, getRequirements } from '@/lib/api/recruitment';
import { getSchoolListData } from '@/lib/api/school';
import { getSponsor } from '@/lib/api/sponsor';
import { getCentralStaff, getCentralStaffGenerations } from '@/lib/api/staff';

// ─────────────────────────────────────────────────────────────
// Project Queries
// ─────────────────────────────────────────────────────────────

export const projectListQueryOptions = (filters: {
  generation?: number | 'ALL';
  page: number;
  platformName?: TPlatformName | 'ALL';
  searchTerm?: string;
  size?: number;
}) =>
  queryOptions({
    queryKey: queryKeys.projects.list(filters),
    queryFn: () =>
      getProjectList({
        page: filters.page,
        size: filters.size ?? 12,
        generation: filters.generation,
        platformName: filters.platformName,
        searchTerm: filters.searchTerm,
      }),
  });

export const projectDetailQueryOptions = (id: number) =>
  queryOptions({
    queryKey: queryKeys.projects.detail(id),
    queryFn: () => getProjectDetail({ id }),
  });

export const releasedProjectQueryOptions = (page: number, size: number = 6) =>
  queryOptions({
    queryKey: queryKeys.projects.released(page),
    queryFn: () => getReleasedProjectList({ page, size }),
  });

export const projectGenerationsQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.projects.generations(),
    queryFn: getGenerations,
  });

// ─────────────────────────────────────────────────────────────
// Sponsor Queries
// ─────────────────────────────────────────────────────────────

export const sponsorListQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.sponsors.list(),
    queryFn: getSponsor,
  });

// ─────────────────────────────────────────────────────────────
// Staff Queries
// ─────────────────────────────────────────────────────────────

export const staffListQueryOptions = (filters: { generation?: number | 'ALL'; page: number; size?: number }) =>
  queryOptions({
    queryKey: queryKeys.staffs.list(),
    queryFn: () =>
      getCentralStaff({
        page: filters.page,
        size: filters.size ?? 9,
        generation: filters.generation ?? 'ALL',
      }),
  });

export const staffGenerationsQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.staffs.generations(),
    queryFn: getCentralStaffGenerations,
  });

// ─────────────────────────────────────────────────────────────
// Recruitment Queries
// ─────────────────────────────────────────────────────────────

export const activitiesQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.recruitment.activity(),
    queryFn: getActivities,
  });

// ─────────────────────────────────────────────────────────────
// School Queries
// ─────────────────────────────────────────────────────────────

export const schoolListQueryOptions = () =>
  queryOptions({
    queryKey: queryKeys.recruitment.schools(),
    queryFn: getSchoolListData,
  });

export const requirementsQueryOptions = (schoolName: string) =>
  queryOptions({
    queryKey: queryKeys.recruitment.requirements(schoolName),
    queryFn: () => getRequirements({ schoolName }),
    enabled: schoolName !== '',
  });

// ─────────────────────────────────────────────────────────────
// Event Queries
// ─────────────────────────────────────────────────────────────

export const centralEventQueryOptions = (eventType: TCentralEventDTO) =>
  queryOptions({
    queryKey: queryKeys.introduction.events(eventType),
    queryFn: () => getCentralEvent({ eventType }),
  });
