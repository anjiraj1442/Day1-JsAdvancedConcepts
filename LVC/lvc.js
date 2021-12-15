/*
VAR:var declarations are globally scoped or function scoped,var variables can be updated and re-declared within its scope
LET:let is the block scoped
CONST: it is the block scoped,variables can neither be updated nor re-declared
*/




//const
const x =[1,2,3,4]
//x = 10;  // Error constant cannot be changed.
x.push(5);
console.log(x)

//let
// 5 is assigned to variable x
let x = 5; 
console.log(x); // 5

// vaue of variable x is changed
x = 3; 
console.log(x); // 3



