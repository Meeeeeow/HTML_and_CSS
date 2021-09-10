function myDisplayer(val){
    console.log(val)
}
let myPromises = new Promise(function(mySuccess,myReject){
    let x =0;
    if(x == 0)
        mySuccess('OK');
    else
        myReject('NO');
});
myPromises.then(
    function(value){
        myDisplayer(value);
    },
    function(err){
        myDisplayer(err);
    }
)



let myPromise = new Promise(function(mySuccess,myError){
    num = Number(prompt("Enter a number from 1 to 10"));
    if (num <=10 && num > 0)
        mySuccess(num);
    else
        myError(num);
});

myPromise.then(
    function(num1){
        console.log(num1);
    },
    function(num2){
        console.log(num2);
    }
);