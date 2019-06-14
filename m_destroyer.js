// function destroyer(arr) {
//     var args = Array.prototype.slice.call(arguments);
  
//     for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j < args.length; j++) {
//         if (arr[i] === args[j]) {
//           delete arr[i];
//         }
//       }
//     }
//     return arr.filter(Boolean); // 这里的Boolean是什么意思？
//   }
  

const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));  // This is an advanced solution. What does const mean? 

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));