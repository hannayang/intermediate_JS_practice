function addTogether() {
    var args = [...arguments];
   //Check for the arguments length
   if(args.length === 2){
      //If there are two arguments,check for the type of both arguments
      //Use typeof to check the type of the argument(both should be numbers)
      if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
        return undefined;
        }
      return args[0]+args[1];
     }
   //When only one argument is provided
   if(args.length === 1){
       var a = args[0];
       //Check the  argument using typeof 
      if(typeof a!=='number'){
          return undefined;
        }
      else{
         //Making use of closures 
         return function(b){
         //Checking the second argument 
           if(typeof b !=='number'){
             return undefined;
             }
           else
             return a + b;
            };
        }
      }
  }

  console.log(addTogether("o")(2));