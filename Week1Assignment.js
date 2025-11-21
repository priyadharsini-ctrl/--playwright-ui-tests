function isOddOrEven(){
    
    if(x%2==0){
        console.log("Number is even");
        
    }else{
        console.log("Number is odd");
        
    }
}
let x=2
//isOddOrEven()

//NumberType
function type( y){
if(y>0){
    console.log("positive");
    
}else if (y=0){
    console.log("Zero");
    
}else{
    console.log("Negative");
    
}
}
//type(-1)

//var vs let vs const Learning

const browserName = 'chrome'
function getBrowserName(){
    if(browserName=='chrome'){
        let browserName
    }
    
    console.log(browserName);
}

//getBrowserName()
//Conditional Statements
function launchBrowser(browserrName){
    if(browserrName=='chrome'){
        console.log("chrome");
        
    }else if(browserrName=='firefox'){
        console.log("firefox");
        
    }else{
        console.log("Not a browser");
        
    }
}
function runTests(testType){
    switch (testType){
        case 'smoke':
            console.log("smoke test");
            break;
        case 'sanity':
            console.log("smoke test");
            break;
        case 'regression':
            console.log("smoke test");
            break;
           default:
            console.log("smoke");
             break;
    }
}
//launchBrowser('firefosx')
//runTests('chk')

