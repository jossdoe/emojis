import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Score } from './styles';

const Result = ({ score, setGameState }) => {
  const router = useRouter();
  const [nameValue, setNameValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScoreSubmit = async () => {
    try {
      setIsLoading(true);

      // API Call
      await fetch('/api/scores', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameValue,
          points: score,
        }),
      });

      setIsLoading(false);
      setNameValue('');
      router.push('/scores');
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  return (
    <>
      <div>Time's up!</div>
      <Score>Your score: {score}</Score>
      <div>
        <label>Your Name</label>
        <input
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.currentTarget.value)}
        />
      </div>
      {isLoading ? (
        'Loading...'
      ) : (
        <button onClick={handleScoreSubmit}>Add to scoreboard</button>
      )}
      <button onClick={() => setGameState('countdown')}>Try again</button>
    </>
  );
};

export default Result;
