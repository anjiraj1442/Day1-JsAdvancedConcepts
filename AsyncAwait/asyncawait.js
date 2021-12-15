//We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.


async function f() {
     console.log('Async function.');
     return Promise.resolve(1);
 }
 
 f().then(function(result) {
     console.log(result)
 });//o/p=Async function,1

 //The await keyword is used inside the async function to wait for the asynchronous operation.
 //The use of await pauses the async function until the promise returns a result (resolve or reject) value. For example,

 // a promise
let promise = new Promise(function (resolve, reject) {
     setTimeout(function () {
     resolve('Promise resolved')}, 4000); 
 })
 
 // async function
 async function asyncFunc() {
 
     // wait until the promise resolves 
     let result = await promise; 
 
     console.log(result);
     console.log('hello');
 }
 
 // calling the async function
 asyncFunc()//Promise resolved,hello
 
 