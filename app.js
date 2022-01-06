"use strict";
var interfacePractice;
(function (interfacePractice) {
    let student = { name: 25, age: 22, greet(phrase) { console.log(this.age); } };
    console.log(student);
    student.greet('ali');
    let teacher;
    teacher = {
        name: 'Ranjani',
        age: 25,
        greeting(phrase) { console.log(phrase + '' + this.name); }
    };
    console.log(teacher);
    teacher.greeting('Hi Dear ');
    class person1 {
        constructor(n) {
            this.name = n;
        }
        greet(phrase) {
            console.log(phrase + ' ' + this.name);
        }
    }
    let user1;
    user1 = new person1('Rolv');
    user1.greet('How are you');
    class testInheritanceInterface {
        constructor(n) {
            this.age = 30;
            this.name = n;
        }
        greet(l) {
            console.log(l + ' ' + this.name);
        }
    }
    const testclass = new testInheritanceInterface('Mohammad');
    testclass.greet('Hello Dear');
    let add;
    add = (num1, num2) => {
        return num1 + num2;
    };
    console.log(add(8, 9));
    let add2;
    add2 = (num1, num2) => {
        return num1 + num2;
    };
    console.log(add2(7, 8));
    class test {
        // num3: number;
        constructor(one, two) {
            this.num1 = one;
            this.num2 = two;
            //this.num3= three;
        }
        sum() {
            return this.num1 + this.num2;
        }
    }
    const sampleOfTest = new test(3, 3);
    let lll = sampleOfTest.sum();
    console.log(lll);
    const e1 = {
        name: 'Mohammad',
        privilages: ['Developer'],
        startDate: new Date
    };
    console.log(e1);
    const e2 = 'intersect of two universal defination';
    // Type Guard
    function add3(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        else {
            return a + b;
        }
    }
    console.log(add3(3, 3));
    console.log(add3('3', '3'));
    function printEmployeeInformation(emp) {
        console.log('Name:' + emp.name);
        if ('privilages' in emp) {
            console.log('Privilages:' + emp.privilages);
        }
        if ('startDate' in emp) {
            console.log('Start Date:' + emp.startDate);
        }
    }
    printEmployeeInformation({ name: 'Mohammad', privilages: ['First'] });
    // use intersection for classes and type guard:
    class Car {
        drive() {
            console.log('Driving...');
        }
    }
    class Truck {
        drive() {
            console.log('Driving a truck...');
        }
        loadCargo(amount) {
            console.log('Loading cargo...' + amount);
        }
    }
    const v1 = new Car();
    const v2 = new Truck();
    function useVehicle(vehicle) {
        vehicle.drive();
        if ('loadCargo' in vehicle) {
            vehicle.loadCargo(1000);
        }
    }
    useVehicle(v1);
    useVehicle(v2);
    function moveAnimal(animal) {
        let Speed;
        switch (animal.type) {
            case 'bird':
                Speed = animal.flyingSpeend;
                break;
            case 'horse':
                Speed = animal.runningSpeed;
            default:
                break;
        }
        console.log('the speed of ' + animal.type + ' is: ' + Speed);
    }
    moveAnimal({ type: 'bird', flyingSpeend: 20 });
    const errorBag = {
        email: 'Not a valid email',
        uaername: 'Must start with a character!',
        dddd: 'dfdfdf'
    };
    function add4(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        else {
            return a + b;
        }
    }
    let containerString = add4('Jone ', 'kjold');
    containerString.split(' ');
    console.log(containerString);
    // optional chaining and Nullish Coalescing
    const userInput = '';
    const storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
    console.log(storeData);
})(interfacePractice || (interfacePractice = {}));
//--------------------New namespace--------------------//
var Generics;
(function (Generics) {
    const name = [];
    const name2 = [];
    //Promise with use Generic type
    const promisetest = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This id Done!');
        }, 2000);
    });
    promisetest.then(date => {
        console.log(date.split(' '));
    });
    // Generic type in Functions and Classes
    function merge(objA, objB) {
        return Object.assign(objA, objB);
    }
    console.log(merge({ name: 'Per' }, { age: 42 }));
    const mergeObj = merge({ name: 'Per' }, { age: 42 });
    console.log(mergeObj);
    console.log(merge({ name: 'Jone' }, { age: 30 }));
    function countAndDescribe(element) {
        let descriptionText = 'Got no value.';
        if (element.length === 1) {
            descriptionText = 'Got 1 element.';
        }
        else if (element.length > 1) {
            descriptionText = 'Got ' + element.length + ' Element.';
        }
        return [element, descriptionText];
    }
    console.log(countAndDescribe(['Sports', 'Cooking']));
    console.log(countAndDescribe([]));
    //
    function extractAndConvert(obj, key) {
        return 'Value:' + obj[key];
    }
    console.log(extractAndConvert({ name: 'Mohammad', surname: 'Ghasempour' }, 'surname'));
})(Generics || (Generics = {})); //end of Generics namespace
