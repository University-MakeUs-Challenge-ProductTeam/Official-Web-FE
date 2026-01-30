'use client';

import { useEffect } from 'react';

const GlobalError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('Global error boundary caught:', error);
  }, [error]);

  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              fontStyle: 'italic',
              marginBottom: '24px',
              color: '#ef4444',
            }}
          >
            !
          </div>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 900,
              fontStyle: 'italic',
              marginBottom: '16px',
              letterSpacing: '-0.05em',
            }}
          >
            CRITICAL <span style={{ color: '#ef4444' }}>ERROR</span>
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '32px',
              maxWidth: '500px',
            }}
          >
            {error.message || 'A critical error occurred. Please refresh the page or contact support.'}
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              type="button"
              onClick={reset}
              style={{
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.borderColor = '#ef4444';
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.borderColor = '#ef4444';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
              }}
            >
              Try Again
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.href = '/';
              }}
              style={{
                padding: '12px 32px',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.6)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
            >
              Go Home
            </button>
          </div>
          {error.digest && (
            <p
              style={{
                marginTop: '32px',
                fontSize: '12px',
                fontFamily: 'monospace',
                color: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
