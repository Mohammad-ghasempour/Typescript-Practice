namespace interfacePractice {


    interface person {
        name: string;
        age: number;

        greeting(phrase: string): void;
    }

    let student = { name: 25, age: 22, greet(phrase: string): void { console.log(this.age) } };
    console.log(student);
    student.greet('ali');



    let teacher: person;
    teacher = {
        name: 'Ranjani',
        age: 25,
        greeting(phrase: string) { console.log(phrase + '' + this.name) }
    }
    console.log(teacher);

    teacher.greeting('Hi Dear ');

    //interface for classes:

    interface Greetable {
        name: string;

        greet(phrase: string): void;
    }

    class person1 implements Greetable {
        name: string;

        constructor(n: string) {
            this.name = n;
        }

        greet(phrase: string) {
            console.log(phrase + ' ' + this.name)
        }

    }

    let user1: Greetable;
    user1 = new person1('Rolv');
    user1.greet('How are you');

// Inheritance in Interface:

    interface named{
        name: string;
    }
    interface greet1 extends named{
        greet(phrase: string):void;
    }
    
    class testInheritanceInterface implements greet1{
        name: string;
        age = 30;
        constructor(n: string){
            this.name= n;
        }
        greet(l:string){
            console.log(l + ' ' + this.name );
        }
    }

    const testclass = new testInheritanceInterface('Mohammad');
    testclass.greet('Hello Dear');


//Functions definitin with type and  Interfaces:
//with type:
    type addFn = (a: number , b: number)=> number;

    let add: addFn;

    add = (num1:number , num2:number)=>{
        return num1 + num2;
    }
    console.log(add(8,9));
//with Interface:
    interface addFn2 {
        (num1: number , num2: number): number;
    }

    let add2: addFn2;
    add2 = (num1: number , num2: number)=>{
        return num1 + num2;
    }

    console.log (add2(7,8));

// use optional denination in a interface

interface add3 {
    num1: number;
    num2: number;
    num3?: number;
}

 class test implements add3 {
    num1: number;
    num2: number;
   // num3: number;
    constructor(one:number,two:number){
        this.num1= one;
        this.num2= two;
        //this.num3= three;
         }
         sum(){
             return this.num1+ this.num2;
         }

}
const sampleOfTest = new test(3,3);
let lll = sampleOfTest.sum();
console.log(lll);

// Intersection Types

type Admin = {
    name: string;
    privilages: string[];
}

type Employee = {
    name:string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1 : ElevatedEmployee = {
    name: 'Mohammad',
    privilages: ['Developer'],
    startDate: new Date
}
console.log (e1);

type Combinable = number | string;
type Numeric = string | boolean;

type Universal = combinable & Numeric;

const e2: Universal = 'intersect of two universal defination';


// Type Guard
function add3 (a: combinable,b: combinable){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    else{
    return a + b;
    }
}
console.log(add3(3,3));

console.log(add3('3','3'));

////////////////
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation (emp: UnknownEmployee){
    console.log('Name:' + emp.name);
    if ('privilages' in emp){
    console.log('Privilages:'+ emp.privilages);}
    if ('startDate' in emp){
    console.log('Start Date:'+ emp.startDate);}
}

printEmployeeInformation({name:'Mohammad' , privilages:['First']});

// use intersection for classes and type guard:
class Car {
    drive(){
        console.log('Driving...');
    }
}
class Truck{
    drive(){
        console.log('Driving a truck...')
    }
    loadCargo(amount: number){
        console.log('Loading cargo...'+ amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if ('loadCargo' in vehicle){
    vehicle.loadCargo(1000);
}
}
useVehicle(v1);
useVehicle(v2);

// Discriminated union

///simple way///

// interface bird {
//     flyingSpeed: number;
// }
// interface horse {
//     runningSpeed: number;
// }

// type Animal = bird | horse;

// function moveAnimal(animal:Animal) {
//     if ('flyingSpeed' in animal){
// console.log('Speed of bird is: '+animal.flyingSpeed);
//     }
//     else{
//         console.log('Speed of horse is: '+animal.runningSpeed);
//     }

// }
// moveAnimal({runningSpeed:20});

///Use Discriminated union:///
interface bird {
    type: 'bird';
    flyingSpeend: number;
}
interface horse{
    type: 'horse';
    runningSpeed: number;
}
type Animal = bird | horse;

function moveAnimal(animal:Animal) {
    let Speed;
    switch (animal.type) {
        case 'bird':
            Speed= animal.flyingSpeend
            break;
        case 'horse':
            Speed= animal.runningSpeed
        default:
        break;
    }
    console.log('the speed of ' + animal.type+ ' is: '+ Speed);
}

moveAnimal({type:'bird' , flyingSpeend:20});

//Index type:

interface ErrorContainer {
    email: 'Not a valid email',
    uaername: 'Must start with a character!'
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    uaername: 'Must start with a character!',
    dddd: 'dfdfdf'
}

//Function overload

type combinable2 = string | number;


function add4(a: number , b: number): number;
function add4(a: string , b: string): string;
function add4(a: combinable2 , b: combinable2){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    else{
        return a + b;
    }
}

let containerString = add4('Jone ' , 'kjold');

containerString.split(' ');
console.log(containerString);

// optional chaining and Nullish Coalescing

const userInput = '';
const storeData = userInput ?? 'DEFAULT';

console.log(storeData);

}








//--------------------New namespace--------------------//
namespace Generics{


const name: Array<string> = [];
const name2: Array<number | string> = [];


//Promise with use Generic type
const promisetest: Promise<string> = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('This id Done!');
    }, 2000);

});

promisetest.then(date =>{
    console.log(date.split(' '));
})

// Generic type in Functions and Classes

function merge <T extends object , U extends object> (objA: T , objB: U){
    return Object.assign(objA , objB);
}

console.log( merge({name:'Per'},{age: 42}));
const mergeObj= merge({name:'Per'},{age: 42});
console.log(mergeObj);
console.log(merge({name:'Jone'},{age:30}));

//Generic function - another example:

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T):[T , string]{
    let descriptionText = 'Got no value.';
    if (element.length === 1){
        descriptionText = 'Got 1 element.'
    }
    else if (element.length > 1){
        descriptionText = 'Got '+ element.length+' Element.';
    }
    return [element , descriptionText];
}


console.log(countAndDescribe(['Sports' , 'Cooking']));
console.log(countAndDescribe([]));

//
function extractAndConvert<T extends object , U extends keyof T>(obj:T , key:U){
    return 'Value:' + obj[key];
}

console.log(extractAndConvert({name:'Mohammad', surname:'Ghasempour'}, 'surname'));






















} //end of Generics namespace
