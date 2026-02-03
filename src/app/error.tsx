'use client';

import { useEffect } from 'react';

import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';

import { motion } from 'framer-motion';

const ErrorBoundary = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative flex flex-col items-center gap-8 px-6 text-center">
        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/20 blur-[120px]"
        />

        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex size-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10"
        >
          <Typography className="text-6xl font-black italic text-red-500">!</Typography>
        </motion.div>

        {/* Error Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
          <Typography as="h1" className="text-5xl font-black italic tracking-tighter text-white md:text-7xl">
            SYSTEM <span className="text-red-500">ERROR</span>
          </Typography>
          <Typography className="max-w-md text-lg font-medium text-white/60">{error.message || 'Something went wrong. Please try again.'}</Typography>
        </motion.div>

        {/* Action Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex gap-4">
          <Button
            onClick={reset}
            variant="main"
            className="border-red-500/30 bg-red-500/10 text-red-500 transition-all hover:border-red-500 hover:bg-red-500/20 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
          >
            TRY AGAIN
          </Button>
          <Button
            onClick={() => {
              window.location.href = '/';
            }}
            variant="outline"
            className="border-white/10 bg-white/5 text-white/60 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            GO HOME
          </Button>
        </motion.div>

        {/* Error Digest (for debugging) */}
        {error.digest && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Typography className="font-mono text-xs text-white/20">Error ID: {error.digest}</Typography>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ErrorBoundary;
