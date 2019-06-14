// function dropElements(arr, func) {
//   var newArr = []; 
//   for (var i = 0; i < arr.length; i++) {
//       var item = arr[i]; 
//       if(func(item)) {
//           newArr.push(item); 
//       }
//   } 
//   if(newArr.length === 0) {
//       return []; 
//   } else {
//       var n1 = newArr[0]; 
//       return arr.slice(arr.indexOf(n1));}
// }


function dropElements(arr, func) {
    // drop them elements.
    var times = arr.length;
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {  // 为什么只写了arr[0]? 其它的怎么loop? 
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }
  
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
