import { useState, useEffect } from 'react';
import { Instructions, PlayButton, ScoreButton } from 'styles/index.styles';

const IndexPage = () => {
  const [gameState, setGameState] = useState('index');
  const [preCountdown, setPreCountdown] = useState(5);
  const [gameCountdown, setGameCountdown] = useState(10);
  const [gameScore, setGameScore] = useState(0);
  const [currentEmoji, setCurrentEmoji] = useState('🤓');
  const [emojiField, setEmojiField] = useState('');
  const [nameField, setNameField] = useState('');

  useEffect(() => {
    if (gameState === 'countdown' && preCountdown > 0) {
      setTimeout(() => setPreCountdown(preCountdown - 1), 1000);
    } else if (preCountdown === 0) {
      setGameState('gameloop');
      setPreCountdown(5);
    }
  }, [gameState, preCountdown]);

  useEffect(() => {
    if (gameState === 'gameloop' && gameCountdown > 0) {
      setTimeout(() => setGameCountdown(gameCountdown - 1), 1000);
    } else if (gameCountdown === 0) {
      setGameState('result');
      setGameCountdown(10);
    }
  }, [gameState, gameCountdown]);

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
        <button>Add to scoreboard</button>
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
