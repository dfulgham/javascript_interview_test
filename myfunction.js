// to run this file enter the following command on the console:

     node myfunction.js

//

function main(){

    // this is your name
    var myName = "developer";
    
    // a random countdown integer between 1 and 20
    let _rndNumber = Math.random(20)

    //this timer runs every 1000ms and logs your name and the current countdown to the console
    let timer = interval( ()=>{
        if _rndNumber < 1 cleareInterval(timer);
        console.log(`myname  ${rndNumber}`);
         _rndNumber -= 1;
        },1000)

}

execute mainFunction()