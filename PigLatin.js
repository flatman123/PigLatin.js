


function vowelChecker(str){
      let splitUpWord = str.split(''); // ['a','p','p','l','e'];
      let vowelCntr = 0;
      let vowels = ['a','e','i','o','u'];

      // Count Number of Vowels
      splitUpWord.forEach((char,indx,string) => vowels.includes(char) ? ++vowelCntr : null);

      return {
                  isVowel: !vowels.includes(splitUpWord[0]) ? false : true,
                  splitWord: splitUpWord,
                  vowelCntr: vowelCntr,
                  vowels: vowels
            }
};


function prepConsonant(arr, vowels, numOfVowels){
      let firstVowel = arr.find(e => vowels.includes(e));
      let getIndex = arr.indexOf(firstVowel);
      let noVowels = ''.concat(arr.join('') + 'ay');
      let getConstsLetters = arr.filter((e,i,a) => i >= a.indexOf(firstVowel)).join('');     
      
      // Remove The remaining characters
      let vowelLetters = arr.filter((e,i,a) => a.splice(getIndex)).join('');

      //Create PigLatin OutPut for Consonants
      let output = getConstsLetters.concat(vowelLetters += 'ay');

      return numOfVowels === 0 ? noVowels : output;
};


function run(){

      function startPiglatin(str) {           
            let getResults = vowelChecker(str);
            let isVowel = getResults.isVowel;
            let wrd = getResults.splitWord;
            let vowels = getResults.vowels;
            let vowelCntr = getResults.vowelCntr;
            let consonant = prepConsonant(wrd, vowels, vowelCntr);
            
            return !isVowel ? consonant : str + 'way';
      }
      return startPiglatin;
};

let translatePigLatin = run();
translatePigLatin("consonant");
