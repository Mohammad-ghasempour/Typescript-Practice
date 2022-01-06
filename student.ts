import { Human } from "./human";

export class Student extends Human{
    private setFirstName(name:string): void{
        this.firstName = name;
        console.log(`The name is: ${this.firstName}`);
    
    }
}