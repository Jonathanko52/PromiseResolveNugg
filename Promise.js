Promise.resolve(1)
//iniaties the promise
.then(y => y+1)
//takes the value of the resolved first promise(1), under the argumet y, adds 1, passes it on.
.then(y =>{
  throw new Error('Error')
})
//throws an error message with strign value 'error'.
.catch(()=>1)
//if any of the above goes wrong, defaults the value of the promise as (1). We forced a thrown error, so the promise is now 1.
.then(y => y+1)
//add 1 to y, resolving the value to 2
.then(y=> console.log(y))
//logs y, which is 2.
.catch(console.error)
//console logs an error if antthing goes wrong