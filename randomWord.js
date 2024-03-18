
export default function randomWord(wordList, wordLength, uniqueLetters){
  const validList = wordList.filter((x) => x.length == wordLength);
  const word = validList[Math.floor(Math.random() * validList.length)];
  return word
};