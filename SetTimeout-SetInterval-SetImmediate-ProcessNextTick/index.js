function codezTech5() {
    setTimeout(() => {
        console.log('I am setTimeout');
    }, 0); //1 sec

    setInterval(() => {
        console.log("I am setInterval");
    }, 1000) //1sec
    
    setImmediate(() => {
        console.log('I am setImmediate');
     })
     
     process.nextTick(()=> {
         console.log('I am process nextTick');
     })
    
   
}


codezTech5();