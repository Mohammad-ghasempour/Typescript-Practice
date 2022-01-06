"use strict";
// kinds of define Array
let family = ['jone', 'thomas', 2];
console.log(family[2]);
let cars = ['BMW', 'peaguet'];
console.log(cars);
let fruit = ['Jone', 5];
console.log(fruit[1]);
//Create new Enumeric...
var cars2;
(function (cars2) {
    cars2[cars2["BMW"] = 5] = "BMW";
    cars2[cars2["Ford"] = 9] = "Ford";
    cars2[cars2["Mazda"] = 15] = "Mazda";
})(cars2 || (cars2 = {}));
;
let newCar = cars2.Mazda;
console.log(newCar + 2);
// use unknown and set determine a type for unknown type
let test1 = 'Hvordan har du det?';
console.log(test1.toUpperCase());
//Multitype
let test2;
test2 = false;
//functions
function add(val1, val2, val3) {
    if (val3) {
        return val1 + val2 + val3;
    }
    else
        return 0;
}
let xx = (Math.random() * 10);
console.log(add(5, 6, xx));
//Void as a return!
function concatenate(str1, str2) {
    console.log(str1 + str2);
}
concatenate("Jone", " Skjold");
//Pass object into a function
function fullName(person) {
    console.log(`My fullname is: ${person.firstName} ${person.lastName}`);
}
fullName({ firstName: 'Mohammad', lastName: 'Ghasempour' });
//use inline interface
function information(person) {
    console.log(`His name is: ${person.name} and his age is: ${person.age}`);
}
var person = {
    name: "Jone",
    age: 33
};
information(person);
//use general interface
function information2(student) {
    console.log(`His name is: ${student.name} and his classnumber is: ${student.classNumber}`);
}
var student = {
    name: "Jone",
    classNumber: 7
};
information2(student);
// Define a Class
class cedans {
    constructor(name) {
        this.carName = name;
    }
    show() {
        console.log(`This car name is: ${this.carName}`);
    }
}
let newcedan = new cedans('Mazda');
console.log(newcedan.carName);
newcedan.show();
class model extends cedans {
    constructor(name) {
        super(name);
    }
    showDetails() {
        console.log('Detais of this class was written');
    }
}
let newmodel = new model('323');
console.log('-----------------------');
let test = new cedans('KIA');
test.show();
//Objects...
const objPerson = {
    name: 'Mohammad',
    age: 30
};
console.log(objPerson.name);
//Arrays
const arrPerson = {
    name: 'Mohammad',
    age: 33,
    hobbies: ['Archery', 'Darts']
};
for (const hobby of arrPerson.hobbies) {
    console.log(hobby);
}
//Tuple :
const tupePerson = {
    name: 'Mohammad',
    age: 33,
    hobbies: ['Archery', 'Darts'],
    role: [2, 'admin']
};
tupePerson.role.push('author');
//console.log(tupePerson.role[0]);
for (const looktupe of tupePerson.role) {
    console.log(looktupe);
}
tupePerson.role[0] = 5;
tupePerson.role.push('writer');
tupePerson.role.push('writer2');
console.log(tupePerson.role[0]);
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role["author"] = "Jone";
})(Role || (Role = {}));
;
console.log(Role.READ_ONLY);
console.log(Role.author);
//combine various to combine
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
}
console.log(combine(17, 34));
console.log(combine('Espen', ' Wathne'));
function combine2(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
        return result;
    }
    else {
        result = input1.toString() + input2.toString();
        return result;
    }
}
console.log(combine2(16, 32));
console.log(combine2("16", "32", 'as-number'));
console.log(combine2('Jone', ' Skjold'));
const u1 = { name: 'Mohammad', age: 33 };
console.log(u1.name);
//Usual parameters VS Alias definition
//First: Usual
function greet(person) {
    console.log('Hi my name is: ' + person.name + ' and my age is: ' + person.age);
}
greet({ name: 'Mohammad', age: 37 });
function isOlder(person, checkAge) {
    return checkAge > person.age;
}
console.log(isOlder({ name: 'Mohammad', age: 37 }, 18));
function greet2(person) {
    console.log('Hi my name is: ' + person.name + ' and my age is: ' + person.age);
}
greet({ name: 'Mohammad', age: 37 });
function isOlder2(person, checkAge) {
    return checkAge > person.age;
}
console.log(isOlder({ name: 'Mohammad', age: 37 }, 18));
// Void and Undefined type
function voidAndUndefined(A, B) {
    console.log(A + +B);
    return;
}
voidAndUndefined(20, '10');
//function types:
function addTwoNumbers(n1, n2) {
    return n1 + n2;
}
console.log(addTwoNumbers(2, 2));
let combineValues;
combineValues = addTwoNumbers;
console.log(combineValues(50, 50));
//------------------
function callBackFunction(a, b, cb) {
    const result = a + b;
    cb(result);
}
callBackFunction(5, 5, (f) => { console.log(++f); });
//unknown and Never types:
let userInput;
let userText;
userInput = 5;
userInput = 'Max';
userInput = 'Maximilian';
if (typeof userInput === 'string') {
    userText = userInput;
    console.log(userText);
}
////////////// NEW PRACTICE - SECOND SEASON - //////////////////
var SecondSeason;
(function (SecondSeason) {
    class Department {
        constructor(n) {
            this.employees = [];
            this.name = n;
        }
        describe() {
            console.log('Department name is:' + this.name);
        }
        static createEmployee(name) {
            return { name: name };
        }
        addEmployee(employee) {
            this.employees.push(employee);
        }
        printEmployeeInformation() {
            console.log(this.employees.length);
            console.log(this.employees);
        }
    }
    Department.fiscalYear = 2020;
    const accounting = new Department('Accounting');
    accounting.describe();
    accounting.addEmployee('Ghasempour');
    accounting.addEmployee('skjold');
    accounting.printEmployeeInformation();
    //////Create class with take parameters in constructor//////////
    class Office {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        describe() {
            console.log(`Our office ID is:${this.id} and its name is: ${this.name}`);
        }
        describe2() { }
        ;
    }
    const myOffice = new Office('7', 'Template');
    myOffice.describe();
    class IToffice extends Office {
        constructor(id, admins) {
            super(id, 'IT');
            this.admins = admins;
        }
    }
    const itaccountning = new IToffice('8', ['Tim']);
    class accountingDepartment extends Office {
        constructor(id, reports) {
            super(id, 'Accounting');
            this.reports = reports;
        }
        addReports(text) {
            this.reports.push(text);
        }
        printReport() {
            console.log(this.reports);
        }
        describe2() {
            console.log('Accounting Department -ID' + this.id);
        }
    }
    const accountingperson = new accountingDepartment('9', []);
    accountingperson.addReports('Something went wrong!');
    accountingperson.printReport();
    class accountTest extends Department {
        addEmployee(name) {
            this.employees.push(name);
        }
    }
    const accountTestSample = new accountTest('fullstack');
    accountTestSample.addEmployee('Espen');
    accountTestSample.addEmployee('Tone');
    accountTestSample.printEmployeeInformation();
    // Getter and Setter
    class Accounting2 extends Office {
        constructor(id, reports) {
            super(id, 'Accounting');
            this.reports = reports;
            this.lastReport = reports[0];
        }
        get getsetlastReport() {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('Oops!  No report found!');
        }
        set getsetlastReport(value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        }
        addReport(text) {
            this.reports.push(text);
            this.lastReport = text;
        }
        printReport() {
            console.log(this.reports);
        }
    }
    const testgetlastreport = new Accounting2('10', []);
    testgetlastreport.addReport('an error occur');
    console.log(testgetlastreport.getsetlastReport);
    testgetlastreport.getsetlastReport = 'another error occur';
    testgetlastreport.printReport();
    console.log(Department.fiscalYear);
    console.log(Department.createEmployee('Thomas'));
})(SecondSeason || (SecondSeason = {}));
