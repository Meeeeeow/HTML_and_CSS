
function myFunc(){
    input_val = document.getElementById('demo1').value;

    respo = document.getElementById('response');
    respo.innerHTML = '';   
    try{
        
        if(input_val == '')
            throw 'enter valid input'; 
        if (isNaN(input_val))
            throw 'not a number';
        if(Number(input_val) < 5)
            throw 'too small';
        if(Number(input_val) > 10)
            throw 'too big';
    }catch(err){
        respo.innerHTML = 'Input is ' + err;
    }
};
