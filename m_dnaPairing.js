function pairElement(str) {
    var arr = str.split(""); 
    console.log(arr);
    let newArr = []; 
    for (var i = 0; i < arr.length; i++) {
       let char = arr[i]; 
        newArr.push([char]); 
    }; 
    for (var j = 0; j < newArr.length; j++) {
        var subArr = newArr[j]; 
        if(subArr[0] === "G") {
            subArr.push("C"); 
        } if(subArr[0] === "C") {
            subArr.push("G");
        } if(subArr[0] === "A") {
            subArr.push("T");
        } if(subArr[0] === "T") {
            subArr.push("A"); 
        }
    }
    return newArr; 
}

console.log(pairElement("GCG"));