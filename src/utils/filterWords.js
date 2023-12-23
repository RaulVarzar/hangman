import { words } from '../words.js'

function hasDuplicates(arr, value) { // check how many times value appears in the words, except the first and last letter
    let count = 0;
    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i] === value){
            count++
        }
    }
    return count;
}

function isValidWord(word){
    if (word.length < 5){  // remove words that are too short
        return(false)
    } 
    if (word.length < 7 && (hasDuplicates(word, word[0]) > 0 || hasDuplicates(word, word[word.length-1]) > 0)){
      return false
    }
    else if (word[0]===word[word.length-1] && hasDuplicates(word, word[0]) > 0){  // remove word if first letter is the same as last letter and first letter has another duplicate
        return(false)
    } else if (hasDuplicates(word, word[0]) > 1 || hasDuplicates(word, word[word.length-1]) > 1) {  // remove word if first or last letter has more than 1 duplicate
        return(false)
    } else if (hasDuplicates(word, word[0]) >= 1 && hasDuplicates(word, word[word.length-1]) >= 1) {  // remove word if first or last letter has more than 1 duplicate
      return(false)
  }
    return true
}


const onlyValidWords = words.filter(word => isValidWord(word) === true)

export function filterByDifficulty(difficulty) {
    switch(difficulty) {
      case 'beginner':
        return onlyValidWords.filter((word) => word.length > 4 && word.length < 7);
      case 'intermediate':
        return onlyValidWords.filter((word) => word.length > 6 && word.length < 10);
      case 'advanced':
        return onlyValidWords.filter((word) => word.length > 9 && word.length < 14);
      default:
        return '';
    }
  }



