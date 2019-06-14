// function sumAll(arr) {
//     let firstNum = arr[0];  
//     let secondNum = arr[1];
//     let newArr = []; 
//     for (let i = Math.min(firstNum, secondNum); i <= Math.max(firstNum, secondNum); i++) {
//       newArr.push(i); 
//     }
//     return newArr.reduce((sum, num) => sum + num, 0);
//   }

// 以上是我自己的解法，以下是最佳答案解法

  function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
    return sum;
}

  console.log(sumAll([1, 4]));