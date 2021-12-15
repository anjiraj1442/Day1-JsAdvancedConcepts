
//In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.
//resolved,rejected,pending,settiled

function login(firstNamme, lastName,email){
     new Promise((resolve, reject)=>{
     setTimeout(()=>{
          console.log("inside login page")
          resolve();

     },1000)
})
}


function enterDetails(calback){
     new Promise((resolve, reject)=>{
          setTimeout(()=>{
               console.log("inside login page")
               reject();
     
          },1000)
     })
}


login("firstName","lastname","email")
.then(()=>{
   enterDetails();
})
.catch(()=>{
})

//another example

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);//there is a count value.


//using then
// returns a promise

let countValue = new Promise(function (resolve, reject) {
     resolve("Promise resolved");
   });
   
   // executes when promise is resolved successfully
   
   countValue
     .then(function successValue(result) {
       console.log(result);
     })
   
     .then(function successValue1() {
       console.log("You can call multiple functions this way.");
     });