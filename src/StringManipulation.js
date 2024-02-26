const countCharacters = (str) => {
  return str.length;
}

const countVowels = (str) => {
  const lowerStr = str.toLowerCase();
  const vowels = ["a", "o", "u", "e", "i", "y"];
  let count = 0;
  for(char of lowerStr){
    if(vowels.includes(char)){
      count++;
    }
  }

  return count;
}

const checkExistenceOfStr = (str, checkStr) => {
  return str.includes(checkStr);
}

const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

const titleCaseConversion = (str) => {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}

const findLongestWord = (str) => {
  let strArr = str.split(" ");
  const longestWord = strArr.reduce((a, b) => b.length > a.length ? b : a);
  return longestWord;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}