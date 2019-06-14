function truthCheck(collection, pre) {
    return collection.every((item) => Boolean(item[pre]));
  }
  
  // test here
 console.log(truthCheck([{"user": "Tinky-Winky"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));