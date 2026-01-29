import type { TPlatformName } from '@/types/projectDto';

/**
 * Type-safe query key factory.
 * Keys are structured as arrays for better cache invalidation granularity.
 */
export const queryKeys = {
  // Project
  projects: {
    all: ['projects'] as const,
    list: (filters: { generation?: number | 'ALL'; page: number; platformName?: TPlatformName | 'ALL'; searchTerm?: string }) =>
      ['projects', 'list', filters] as const,
    detail: (id: number) => ['projects', 'detail', id] as const,
    released: (page: number) => ['projects', 'released', page] as const,
    generations: () => ['projects', 'generations'] as const,
  },

  // Sponsors
  sponsors: {
    all: ['sponsors'] as const,
    list: () => ['sponsors', 'list'] as const,
  },

  // Staff
  staffs: {
    all: ['staffs'] as const,
    list: () => ['staffs', 'list'] as const,
    generations: () => ['staffs', 'generations'] as const,
  },

  // Recruitment
  recruitment: {
    all: ['recruitment'] as const,
    activity: () => ['recruitment', 'activity'] as const,
    schedule: () => ['recruitment', 'schedule'] as const,
    schools: () => ['recruitment', 'schools'] as const,
    requirements: (schoolName: string) => ['recruitment', 'requirements', schoolName] as const,
  },

  // Introduction
  introduction: {
    curriculum: () => ['introduction', 'curriculum'] as const,
    events: (eventType: string) => ['introduction', 'events', eventType] as const,
  },

  // Main
  main: {
    activity: () => ['main', 'activity'] as const,
  },
} as const;
