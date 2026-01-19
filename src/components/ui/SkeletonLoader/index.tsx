type TSkeletonLoaderProps = {
  columns?: 1 | 2 | 3 | 4;
  count?: number;
  variant: 'grid' | 'card';
};

const SkeletonLoader = ({ count = 6, variant = 'grid', columns = 3 }: TSkeletonLoaderProps) => {
  if (variant === 'card') {
    return <div className="h-64 animate-pulse rounded-4xl bg-white/5" role="status" aria-label="로딩 중" />;
  }

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',
  }[columns];

  return (
    <div className={`grid gap-8 ${gridColsClass} lg:gap-10`} role="status" aria-label="로딩 중">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="h-64 animate-pulse rounded-4xl bg-white/5" aria-hidden="true" />
      ))}
    </div>
  );
};

export default SkeletonLoader;
