// function orbitalPeriod(arr) {
//     var GM = 398600.4418;
//     var earthRadius = 6367.4447;
  
//     // Loop through each item in the array arr
//     arr.forEach((item) => {
//       // Calculate the Orbital period value
//       var newValue = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
//       //Delete the avgAlt property
//       delete item.avgAlt;
//       //Add orbitalPeriod property
//       item.orbitalPeriod = newValue;
//     });
//     return arr;
//   }
  
  // test here
//   console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


  // Solution 2: (Above is Solution 1)
  function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    //Looping through each key in arr object
    for(var i in arr) {
      //Rounding off the orbital period value
      var newValue = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));
      //deleting the avgAlt property
      delete arr[i].avgAlt;
      //adding orbitalPeriod property
      arr[i].orbitalPeriod = newValue;
    }
  
    return arr;
  }

  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));