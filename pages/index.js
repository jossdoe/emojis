import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useCountdown from 'hooks/useCountdown';
import getRandomEmoji from 'utils/getRandomEmoji';
import Countdown from 'components/Countdown';
import Gameloop from 'components/Gameloop';
import Result from 'components/Result';

import { Instructions, PlayButton, ScoreButton } from 'styles/index.styles';

const IndexPage = () => {
  const router = useRouter();

  // General game states
  const [gameState, setGameState] = useState('index');
  const [gameScore, setGameScore] = useState(0);

  // Countdown states
  const preCountdown = useCountdown(5, gameState === 'countdown', () => {
    setGameState('gameloop');
  });
  const gameCountdown = useCountdown(120, gameState === 'gameloop', () => {
    setGameState('result');
  });

  // Emoji states
  const [currentEmoji, setCurrentEmoji] = useState(getRandomEmoji(null));
  const [emojiField, setEmojiField] = useState('');

  // Set Score to Zero whenever a new round starts
  useEffect(() => {
    if (gameState === 'countdown') setGameScore(0);
  }, [gameState]);

  // Check if user types the correct emoji, award points and reset
  useEffect(() => {
    if (emojiField === currentEmoji) {
      setGameScore(gameScore + 1);
      setCurrentEmoji(getRandomEmoji(currentEmoji));
      setEmojiField('');
    }
  }, [emojiField]);

  if (gameState === 'countdown') return <Countdown count={preCountdown} />;

  if (gameState === 'gameloop')
    return (
      <Gameloop
        countdown={gameCountdown}
        score={gameScore}
        currentEmoji={currentEmoji}
        emojiField={emojiField}
        setEmojiField={setEmojiField}
      />
    );

  if (gameState === 'result')
    return <Result score={gameScore} setGameState={setGameState} />;

  return (
    <>
      <Instructions>
        Test your millenial superpowers: Type the shown emojis as quickly as
        possible.
      </Instructions>
      <PlayButton onClick={() => setGameState('countdown')}>Play</PlayButton>
      <ScoreButton onClick={() => router.push('/scores')}>
        Highscores
      </ScoreButton>
    </>
  );
};

export default IndexPage;
