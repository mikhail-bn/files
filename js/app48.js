const userWord = prompt('Введите слово для первёртывания с конца в начало');
const reverseFunc = (userWord) => {
    const reversedWord = userWord.split('').reverse().join('').toLowerCase();
    const reversedWordCap = reversedWord[0].toUpperCase() + reversedWord.slice(1);
    return reversedWordCap;
    
}
const toSeeWord = reverseFunc(userWord);
alert(`Если перевернуть то будет ${toSeeWord}`);