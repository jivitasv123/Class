//  settimeout

function morning (){
    setTimeout(() => {
        console.log("good morning");
        
    },5000);
}
function evening() {
    setTimeout(() => {
        console.log("good evening");
        
    }, 8000);
}
function night (){
    setTimeout(() => {
        console.log("good night");
        
    }, 1000);
}
morning();
evening();
night();