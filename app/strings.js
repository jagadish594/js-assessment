stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let charArr = Array.from(str);
    let resultArr = [], counter = 0;
    charArr.forEach(e =>{
      if(e !== resultArr[resultArr.length - 1]){
        counter = 0;
      }
      if(counter < amount){
        resultArr.push(e);
        counter++;
      }
    });
    return resultArr.join('');  
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let revStr = [], j = 0;
    for(let i=str.length-1; i>= 0; i--){
      revStr[j] = str[i];
      j++;
    }
    return revStr.join('');  
  },
};
