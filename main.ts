
// kinds of define Array
let family: any[] = ['jone', 'thomas', 2];
console.log(family[2]);

let cars: Array<string> = ['BMW', 'peaguet'];
console.log(cars);

let fruit: [string, number] = ['Jone', 5];
console.log(fruit[1]);


//Create new Enumeric...
enum cars2 { BMW = 5, Ford = 9, Mazda = 15 };
let newCar: cars2 = cars2.Mazda;
console.log(newCar + 2);


// use unknown and set determine a type for unknown type
let test1: unknown = 'Hvordan har du det?';
console.log((test1 as string).toUpperCase());


//Multitype
let test2: number | boolean;
test2 = false;


//functions
function add(val1: number, val2: number, val3?: number) {
    if (val3) {
        return val1 + val2 + val3
    }
    else
        return 0;
}
let xx = (Math.random() * 10)
console.log(add(5, 6, xx));


//Void as a return!
function concatenate(str1: string, str2: string): void {
    console.log(str1 + str2);
}
concatenate("Jone", " Skjold");

//Pass object into a function
function fullName(person: { firstName: string, lastName: string }) {
    console.log(`My fullname is: ${person.firstName} ${person.lastName}`)
}

fullName({ firstName: 'Mohammad', lastName: 'Ghasempour' });

//use inline interface
function information(person: { name: string, age: number }) {
    console.log(`His name is: ${person.name} and his age is: ${person.age}`);
}
var person = {
    name: "Jone",
    age: 33
}
information(person);


//use general interface
function information2(student: studentlimit) {
    console.log(`His name is: ${student.name} and his classnumber is: ${student.classNumber}`);
}

interface studentlimit {
    name: string,
    classNumber: number,
    isValuable?: boolean
}

var student = {
    name: "Jone",
    classNumber: 7
}
information2(student);

// Define a Class
class cedans {
    carName: string;
    constructor(name: string) {
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
    constructor(name: string) {
        super(name)
    }
    showDetails() {
        console.log('Detais of this class was written')

    }

}

let newmodel = new model('323');

console.log('-----------------------');

let test = new cedans('KIA');
test.show();


//Objects...

const objPerson: { name: string; age: number } = {
    name: 'Mohammad',
    age: 30
}
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
const tupePerson: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
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
enum Role { ADMIN = 5, READ_ONLY, author = 'Jone' };
console.log(Role.READ_ONLY);
console.log(Role.author);

//combine various to combine

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
        return result
    }
    else {
        result = input1.toString() + input2.toString();
        return result
    }

}
console.log(combine(17, 34));
console.log(combine('Espen', ' Wathne'));


// Use literal type for limite kind of sum!
type combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-string'
function combine2(input1: combinable, input2: combinable, resultConversion?: conversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
        return result
    }
    else {
        result = input1.toString() + input2.toString();
        return result
    }

}
console.log(combine2(16, 32));
console.log(combine2("16", "32", 'as-number'));
console.log(combine2('Jone', ' Skjold'));

//Alias
type User = { name: string, age: number }
const u1: User = { name: 'Mohammad', age: 33 }
console.log(u1.name);



//Usual parameters VS Alias definition
//First: Usual
function greet(person: { name: string, age: number }) {
    console.log('Hi my name is: ' + person.name + ' and my age is: ' + person.age);
}

greet({ name: 'Mohammad', age: 37 });

function isOlder(person: { name: string, age: number }, checkAge: number) {
    return checkAge > person.age;

}
console.log(isOlder({ name: 'Mohammad', age: 37 }, 18));
//Now: with Alias

type info = { name: string, age: number }

function greet2(person: info) {
    console.log('Hi my name is: ' + person.name + ' and my age is: ' + person.age);
}
greet({ name: 'Mohammad', age: 37 });

function isOlder2(person: info, checkAge: number) {
    return checkAge > person.age;

}
console.log(isOlder({ name: 'Mohammad', age: 37 }, 18));

// Void and Undefined type
function voidAndUndefined(A: number, B: string): undefined {
    console.log(A + +B);
    return
}
voidAndUndefined(20, '10');


//function types:
function addTwoNumbers(n1: number, n2: number) {
    return n1 + n2;
}
console.log(addTwoNumbers(2, 2));


let combineValues: (rr: number, bb: number) => number;


combineValues = addTwoNumbers;
console.log(combineValues(50, 50));

//------------------

function callBackFunction(a: number, b: number, cb: any) {
    const result = a + b;
    cb(result);
}
callBackFunction(5, 5, (f: any) => { console.log(++f) })

//unknown and Never types:

let userInput: unknown;
let userText: string;
userInput = 5;
userInput = 'Max';
userInput = 'Maximilian';
if (typeof userInput === 'string') {
    userText = userInput;
    console.log(userText);
}


////////////// NEW PRACTICE - SECOND SEASON - //////////////////
namespace SecondSeason {

    class Department {
        name: string;
        protected employees: string[] = [];
        static fiscalYear= 2020;
        constructor(n: string) {
            this.name = n;
        }
        describe(this: Department) {
            console.log('Department name is:' + this.name);
        }
        static createEmployee(name:string){
            return {name:name};
        }
        addEmployee(employee: string) {
            this.employees.push(employee);
        }
        printEmployeeInformation() {
            console.log(this.employees.length);
            console.log(this.employees);
        }
    }

    const accounting = new Department('Accounting');
    accounting.describe();
    accounting.addEmployee('Ghasempour');
    accounting.addEmployee('skjold');
    accounting.printEmployeeInformation();

    //////Create class with take parameters in constructor//////////
     class Office {
        constructor(protected readonly id: string, public name: string) { }
        describe(this: Office) {
            console.log(`Our office ID is:${this.id} and its name is: ${this.name}`)
            }
             describe2(this: Office) {};

    }
    const myOffice = new Office('7', 'Template');
    myOffice.describe();



    class IToffice extends Office {
        constructor(id: string, public admins: string[]) {
            super(id, 'IT');

        }

    }
    const itaccountning = new IToffice('8',['Tim']);

    class accountingDepartment extends Office{
        constructor(id:string, private reports:string[]){
            super(id,'Accounting');
        }
        addReports(text:string){
            this.reports.push(text);
        }
        printReport(){
            console.log(this.reports);
        }
        describe2(){
            console.log('Accounting Department -ID'+ this.id)
        }

    }
    const accountingperson = new accountingDepartment('9', []);

    accountingperson.addReports('Something went wrong!');
    accountingperson.printReport();




    class accountTest extends Department{
        addEmployee(name:string){
            this.employees.push(name);
        }
       
    }

    const accountTestSample = new accountTest('fullstack');
    accountTestSample.addEmployee('Espen');
    accountTestSample.addEmployee('Tone');

    accountTestSample.printEmployeeInformation();

// Getter and Setter

class Accounting2 extends Office {
     private lastReport: string;
    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
    get getsetlastReport(){
        if(this.lastReport){
        return this.lastReport;}
        throw new Error('Oops!  No report found!')
    }
    set getsetlastReport(value:string){
        if (!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport(){
        console.log(this.reports);
        
    }

}

const testgetlastreport = new Accounting2('10',[]);
testgetlastreport.addReport('an error occur');
console.log (testgetlastreport.getsetlastReport);

testgetlastreport.getsetlastReport= 'another error occur';
testgetlastreport.printReport();

console.log(Department.fiscalYear);
console.log(Department.createEmployee('Thomas'));













}

