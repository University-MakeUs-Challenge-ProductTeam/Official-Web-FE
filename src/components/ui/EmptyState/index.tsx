import Typography from '@/components/common/Typography';

import { motion } from 'framer-motion';

type TEmptyStateProps = {
  icon?: React.ReactNode;
  message: string;
};

const EmptyState = ({ message, icon }: TEmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[300px] w-full items-center justify-center rounded-4xl border border-white/5 bg-white/5"
      role="status"
      aria-live="polite"
    >
      {icon && (
        <div className="mr-3" aria-hidden="true">
          {icon}
        </div>
      )}
      <Typography size="text-sm" className="font-bold uppercase italic tracking-widest text-white/20">
        {message}
      </Typography>
    </motion.div>
  );
};

export default EmptyState;
