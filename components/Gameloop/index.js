import React from 'react';

import { Timer, Emoji, Input, Score } from './styles';

const Gameloop = ({
  countdown,
  score,
  currentEmoji,
  emojiField,
  setEmojiField,
}) => (
  <>
    <Timer>{countdown}</Timer>
    <Emoji>{currentEmoji}</Emoji>
    <Score>
      <strong>{score}</strong> Points
    </Score>
    <Input
      type="text"
      value={emojiField}
      onChange={(e) => setEmojiField(e.currentTarget.value)}
      ref={(input) => input && input.focus()}
    />
  </>
);

export default Gameloop;
