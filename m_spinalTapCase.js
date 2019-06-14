function spinalCase(str) {
    return str.split(/[\W^_]|(?=[A-Z])/).join("-").toLowerCase();
}

console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things")); 
console.log(spinalCase("Teletubbies say Eh-oh"));

