//Hoisting 
 /*
java script is synchronous language 
line by line excution
*/

// using test before declaring
console.log(test);   // undefined
var test;

// using test before declaring
var test;
console.log(test); // undefined

// program to display value
var a;
a = 5;
console.log(a); // 5

//Hoisting is not aplicable for function
add();
function add(){
     console.log("add twoo numbers")
}
//add();