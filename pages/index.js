import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useCountdown from 'hooks/useCountdown';
import { Instructions, PlayButton, ScoreButton } from 'styles/index.styles';

const IndexPage = () => {
  const router = useRouter();
  const [gameState, setGameState] = useState('index');

  const preCountdown = useCountdown(5, gameState === 'countdown', () => {
    setGameState('gameloop');
  });
  const gameCountdown = useCountdown(10, gameState === 'gameloop', () => {
    setGameState('result');
  });

  const [gameScore, setGameScore] = useState(0);
  const [currentEmoji, setCurrentEmoji] = useState('🤓');
  const [emojiField, setEmojiField] = useState('');
  const [nameField, setNameField] = useState('');
  const [isLoadingScore, setIsLoadingScore] = useState(false);

  const handleScoreSubmit = async () => {
    setIsLoadingScore(true);

    // API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoadingScore(false);
    router.push('/scores');
  };

  if (gameState === 'countdown')
    return (
      <>
        <div>{preCountdown}</div>
      </>
    );

  if (gameState === 'gameloop')
    return (
      <>
        <div>Time left: {gameCountdown}</div>
        <div>Score: {gameScore}</div>
        <div>{currentEmoji}</div>
        <input
          type="text"
          value={emojiField}
          onChange={(e) => setEmojiField(e.currentTarget.value)}
        />
      </>
    );

  if (gameState === 'result')
    return (
      <>
        <div>Time's up!</div>
        <div>Your score: {gameScore}</div>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            value={nameField}
            onChange={(e) => setNameField(e.currentTarget.value)}
          />
        </div>
        {isLoadingScore ? (
          'Loading...'
        ) : (
          <button onClick={handleScoreSubmit}>Add to scoreboard</button>
        )}
        <button onClick={() => setGameState('countdown')}>Try again</button>
      </>
    );

  return (
    <>
      <Instructions>
        Test your millenial superpowers: Type the shown emojis as quickly as
        possible.
      </Instructions>
      <PlayButton onClick={() => setGameState('countdown')}>Play</PlayButton>
      <ScoreButton>Highscores</ScoreButton>
    </>
  );
};

export default IndexPage;
