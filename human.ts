export class Human {
protected firstName: string;
private lastName: string;
public age: number;
protected setFirstName(name:string): void{
    this.firstName = name;
    console.log(`The name is: ${this.firstName}`);

}
}

