class Pets{
    constructor(name,year)
    {
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}

let date = new Date();
let yearNow = date.getFullYear();

myCat = new Pets('Shirou',2018);

document.getElementById('demo').innerHTML = "My cat " + myCat.name + " is "+
                                            myCat.age(yearNow) + " years old.";



