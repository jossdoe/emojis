import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Score } from './styles';

const Result = ({ score, setGameState }) => {
  const router = useRouter();
  const [nameValue, setNameValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScoreSubmit = async () => {
    setIsLoading(true);

    // API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    router.push('/scores');
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
