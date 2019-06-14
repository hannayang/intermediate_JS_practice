function steamrollArray(arr) {
    let flat = [].concat(...arr); //这一步是在做什么？
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }

// 以上是方法一, recursive 思想。

  function steamrollArray(arr) {
    var flattenedArray = [];
  
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
  }



