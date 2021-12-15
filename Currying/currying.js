//currying functions

/*a technique that applies a function 
to its arguments one at a time, with 
each application returning a new function 
that accepts the next argument.*/

function addd(a) {
     return function (b) {
     return function (c) {
      return a + b + c
      }
     }
    }
    
    addd(1)(2)(3)//6
       
