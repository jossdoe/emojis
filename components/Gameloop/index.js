import React from 'react';

import { Timer } from './styles';

const Gameloop = ({
  countdown,
  score,
  currentEmoji,
  emojiField,
  setEmojiField,
}) => (
  <>
    <Timer>Time left: {countdown}</Timer>
    <div>Score: {score}</div>
    <div>{currentEmoji}</div>
    <input
      type="text"
      value={emojiField}
      onChange={(e) => setEmojiField(e.currentTarget.value)}
    />
  </>
);

export default Gameloop;
