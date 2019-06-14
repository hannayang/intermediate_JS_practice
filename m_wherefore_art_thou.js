function whatIsInAName(collection, source) {
    // What's in a name?
    var sourceKeys = Object.keys(source); 
    return collection.filter((item) => {
      for (var i = 0; i < sourceKeys.length; i++) {
        if(!item.hasOwnProperty(sourceKeys[i]) || item[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false; 
        }
      }
      return true; 
    });
  }

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));