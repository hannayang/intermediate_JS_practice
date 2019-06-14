// function diffArray(arr1, arr2) {
//     var newArr = []; 
//     for (var i = 0; i < arr1.length; i++) {
//       var itemArr1 = arr1[i]; 
//       if(arr2.indexOf(itemArr1) < 0) {
//           newArr.push(itemArr1); 
//       }
//     }
//     for (var j = 0; j < arr2.length; j++) {
//       var itemArr2 = arr2[j]; 
//       if(arr1.indexOf(itemArr2) < 0) {
//           newArr.push(itemArr2); 
//       }
//     }  
//     return newArr; 
//   }


function diffArray(arr1, arr2) {
  return arr1.filter((item1) => arr2.indexOf(item1) === -1).concat(arr2.filter((item2)=> arr1.indexOf(item2)===-1)); 
}
  
  console.log(diffArray([1, 2, 3, 5, 90], [1, 2, 3, 4, 5, 6, 7]));