import { useState, useEffect } from 'react';

const useCountdown = (seconds, condition, callback) => {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (condition && count > 0) {
      setTimeout(() => setCount(count - 1), 1000);
    } else if (count === 0) {
      callback();
      setCount(seconds);
    }
  }, [condition, count]);

  return count;
};

export default useCountdown;
