function myDisplay(value){
    console.log(value);
}

function calculateSum(num1,num2,callBackFunc){
    callBackFunc(num1 + num2);
    setTimeout(timeOut , 12000);
}

calculateSum(Number(prompt('Enter first digit:')),Number(prompt('enter second digit')),myDisplay);

function timeOut(){
    console.log("timeout is done");
}


function showTime(){
    let  time = new Date();
    let secs = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    document.getElementById('demo').innerHTML = time.getHours() + ":"+
                                                time.getMinutes() + ":"+
                                                secs;
                                               
}

setInterval(showTime,1000);