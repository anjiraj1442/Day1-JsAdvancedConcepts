//login-->  enterDetais-->submit;

function login(firstNamme, lastName,email, calback){
     setTimeout(()=>{
          console.log("inside login page")
          calback();

     },1000)
}
function eterDetails(calback){
     setTimeout(()=>{
          console.log("enter firstname and last name and email")
          calback();

     },1000)
}

function submit(calback){
     setTimeout(()=>{
          console.log("succesfully completed")
          calback();

     },1000)
}

const user =login("firstName","lastName","email",()=>{
     eterDetails(()=>{
     submit(()=>{

     })
     })
})



// function
function display(name, callback) {
     console.log('Hi' + ' ' + name);
     callback();
 }
 
 // callback function
 function callMe() {
     console.log('I am callback function');
 }
 
 // passing function as an argument
 display('Peter', callMe);