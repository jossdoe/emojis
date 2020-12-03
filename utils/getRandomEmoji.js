const emojis = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '😂',
  '🤣',
  '🥲',
  '😊',
  '😇',
];

const getRandomEmoji = (prevEmoji) => {
  const cleanEmojis = emojis.filter((em) => em !== prevEmoji);
  const randEmoji = cleanEmojis[Math.floor(Math.random() * cleanEmojis.length)];
  return randEmoji;
};

export default getRandomEmoji;
