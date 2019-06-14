function fearNotLetter(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    var firstLetter = str[0];
    var firstLetterIndice = alphabet.indexOf(firstLetter);  
    var compareStr = alphabet.slice(firstLetterIndice, firstLetterIndice + str.length); 
    for (var i = 0; i < str.length; i++) {
      if(str === compareStr){
        return undefined; 
      } else if(str[i] !== compareStr[i])
      return compareStr[i]; 
    } 
  }
  
console.log(fearNotLetter("xyz"));