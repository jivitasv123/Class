// callback function

// function box (callback){
//     console.log("open box");
//     callback()
// }
// function box2 (callback){
//     console.log("not open");
    
// }
// box(box2)


// callback hell

// setTimeout 

function walkdog (callback){
    setTimeout(()=> {
        console.log("you walk the dog");
        callback();
    },5000);
      
}
function clean(callback){
    setTimeout(()=> {
        console.log("you clean the kitchan");
    callback();
    },8000);
    
}
function trash(callback){
    setTimeout(()=> {
        console.log("throwing the trash");
        callback();
    }, 1000);
   
}
walkdog(()=>{
    clean(()=>{
      trash(()=>{
            console.log("home work");
            
        })
    })
})




