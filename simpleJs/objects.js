const myObj ={
    name: "John",
    age: 40,
    educational_qualifications:{
        SSc : 5.00,
        HSC : 5.00,
        Hons : 3.25
    },
    profession: function(){
        if(this.age > 30){
            return "Social responsiblities are closing in"
        }else if(this.age < 30 && this.age > 20){
            return "the time is coming";
        }
        else{
            return "please enjoy your life!";
        }
    }
}

console.log(myObj.name);
console.log(myObj.profession());
console.log(myObj.educational_qualifications.SSc.toFixed(2) + ' is my GPA from SSC');

//set get methods

const person ={
    namea:"john",
    age:40,
    language:"",
    set lang(value){
        this.language = value;
    },
    get lang(){
        return this.language;
    }
}

person.lang = "jap";
console.log(person.lang + " is popular now a days");


//constructor
function person1(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.fullDetails = function(city){
        this.city = city;
        return "i am " + this.name + " and age " + this.age + " and lives in " + this.city;
    }
} 

myName = new person1('Sakib',40,'Dhaka');
console.log(myName.fullDetails('Rajshahi'));

person1.prototype.language = "bangla";
console.log(myName.language);