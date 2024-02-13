import { useState, useEffect, useRef } from 'react';

type CountdownStatus = 'idle' | 'running' | 'paused';

interface CountdownHook {
  time: number;
  status: CountdownStatus;
  start: () => void;
  pause: () => void;
  restart: () => void;
}

const useCountdown = (initialTime: number): CountdownHook => {
  const [time, setTime] = useState<number>(initialTime);
  const [status, setStatus] = useState<CountdownStatus>('idle');
  const timerRef = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    if (status === 'running') {
      timerRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 0) {
            setStatus('idle');
            clearInterval(timerRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [status]);

  const start = () => {
    setStatus('running');
  };

  const pause = () => {
    setStatus('paused');
  };

  const restart = () => {
    setTime(initialTime);
    setStatus('running');
  };

  return { time, status, start, pause, restart };
};

export default useCountdown;
