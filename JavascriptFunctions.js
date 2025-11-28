function UserProfile(name){
    console.log(`Hello,${name}!`);
    
}
UserProfile(`Priya`)

//arrow fn

let double=(a)=>{
    console.log(a+a);
    
}
double(2)

//anonymous fn

setTimeout(function() {
    console.log("This is delayed by 2 sec");
    
}, 2000);

//callback fn

function getUserData() {
    
}
function check(){
    setTimeout(() => {
        console.log("delay 3 sec");
    }, 3000); 
    
    
}
getUserData(check())