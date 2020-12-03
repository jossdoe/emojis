import React, { useState } from 'react';
import { useRouter } from 'next/router';

import getRandomEmoji from 'utils/getRandomEmoji';

import {
  Title,
  Score,
  Label,
  Input,
  Spinner,
  SubmitButton,
  ReplayButton,
} from './styles';

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
      <Title>Time's up!</Title>
      <Score>
        Your score: <strong>{score} Points</strong>
      </Score>
      <Input
        type="text"
        value={nameValue}
        onChange={(e) => setNameValue(e.currentTarget.value)}
        placeholder="Enter Name"
      />
      {isLoading ? (
        <Spinner>{getRandomEmoji()}</Spinner>
      ) : (
        <SubmitButton onClick={handleScoreSubmit}>Add Score</SubmitButton>
      )}
      <ReplayButton onClick={() => setGameState('countdown')}>
        Try Again
      </ReplayButton>
    </>
  );
};

export default Result;
