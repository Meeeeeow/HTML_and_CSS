var myFunction = () =>{
    var x = document.getElementsByTagName("input");
    console.log(x);
    for(var i=0;i<x.length;i++)
    {
        if(x[i].value != null && (document.getElementById('g1').checked || document.getElementById('g2').checked) )
            alert('Your form hase been submiited successfully!');
    }
}