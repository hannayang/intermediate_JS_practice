function myReplace(str, before, after) {
    if(before[0].match(/[A-Z]/)) {
       after = after[0].toUpperCase() + after.substr(1); 
    }
    let arr = str.split(" "); 
    let wordIndice = arr.indexOf(before); 
    arr.splice(wordIndice, 1, after); 
    return arr.join(" "); 
  }

// 如果没有大小写的要求，用.replace就可以。
// function myReplace(str, before, after) {
//     return str.replace(before, after); 
// }
  
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); 
console.log(myReplace("His name is Tom", "Tom", "john")); 