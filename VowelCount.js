// Return the number (count) of vowels in the given string.

function getCount(str) {
    let string = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < string.length; j++) {
        if (str[i] === string[j]) {
          count += 1;
        }
      }
    }
    return count;
  }


  function getCount(str) {
    let string = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
     if(string.includes(str[i])) {
       count++
     } 
    }
    return count;
  }