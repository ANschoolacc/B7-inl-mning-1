export default function randomWord(wordList, wordLength, uniqueLetters) {
  const validList = wordList.filter((x) => x.length == wordLength);

  for (let i = 0; i < validList.length; i++) {
    const letters = validList[i].split("");
    let letterCount = {};

    letters.forEach((letter) => {letterCount[letter] = (letterCount[letter] || 0) + 1;});
    
    if (Object.values(letterCount).some((x) => x > 1) && uniqueLetters === true) {
      validList.splice(i, 1);
    }
  }

  const word = validList[Math.floor(Math.random() * validList.length)];
  return word;
}
