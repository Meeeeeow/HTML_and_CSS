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


class User{
    constructor(name,email,age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    welcomeMsg(){
        return "Welcome " + this.name;
    }
}

class Wizard extends User{
    constructor(name,email,age,powerClass){
        super(name,email,age);
        this.powerClass = powerClass;
    }
    attack(){
        return this.name + " is " + this.powerClass + " ranked."; 
    }

}

let wizard = new Wizard('Tsukki','Tsukki@yahoo.com',21,'S');
console.log(wizard.attack());
console.log(wizard.welcomeMsg());

