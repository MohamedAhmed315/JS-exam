
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }

function specialReverse(sentence, letter){

    sentence = sentence.toLowerCase();
    let allWords = sentence.split(' ');
    let newWords = [];
    for (let word of allWords){
        if (word.charAt(0) === letter){
            newWords.push(reverseString(word));
        }
        else newWords.push(word);
    }
    return newWords.join(' ');
}

let str = "peter piper Picked pickled peppers";
console.log(specialReverse(str, 'p'));
