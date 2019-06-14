function uniteUnique(...arrays) {
  const flatArr = [].concat(...arrays); 
  console.log(flatArr); 
  var newArr = []; 
  for (var i = flatArr.length - 1; i >= 0; i--) {
      var item = flatArr[i]; 
      if(flatArr.slice(0, i - 1).indexOf(item) === -1) {
          newArr.push(item); 
      }
  }
  newArr.push(flatArr[0]); 
  return newArr.reverse(); 
}


//   for (var i = 0; i < flatArr.length; i++) {
//       for (var j = 1; j < flatArr.length; j++) {
//           if(flatArr[i] === flatArr[i+j]) {
//               flatArr.splice(i+j, 1); 
//           }
//       }
//   }
//   return flatArr; 
// // }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); 
// console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); 
