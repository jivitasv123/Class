// syntax
//  function num(){
// return new Promise(resolve,reject)
// }

function walkdog (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             const dog =true;
             if(dog){
                resolve("walk the dog");
             }
             else {
                reject("you did not walk the dog")
             }
        }, 3000);
    })
   
}
function cleankit (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const clean =true;
            if (clean){
                resolve("clean the kitchan");
            }
            else {
                reject("did not clean the kitchan")
            }
        }, 3500);
    })
    
}
function trash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashout = false;
            if(trashout){
                resolve("put the trash out");
            }
            else{
                reject("you did not put the trash out")
            }
        }, 4000);  
    })

}
// walkdog()
// .then(value =>{console.log(value); return cleankit()})
// .then(value =>{console.log(value);return trash()})
// .catch(value =>{console.log(value)})


async function works() {
    try {
        const box = await walkdog();
    console.log(box);
    const box1 = await cleankit();
    console.log(box1);
    const box2 = await trash()
    console.log(box2);
    } catch (error) {
        console.log(error);
        
    }
    
    
} 
works ();