import { useRef } from 'react';

const useSingleRequest = () => {
  const apiRequests = useRef<Set<string>>(new Set());

  const startRequest = (requestId: string) => {
    if (apiRequests.current.has(requestId)) {
      // eslint-disable-next-line no-alert
      alert('이미 요청이 진행 중 입니다.');
      return false;
    }
    apiRequests.current.add(requestId);

    return true;
  };

  return { startRequest };
};

export default useSingleRequest;
