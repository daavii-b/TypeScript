function noReturn(...args: string[]): void {
    console.log(...args);
    console.log("I am a no return function");
}

const person = {
    name: "John",
    age: 30,

    sayName(): void {
        console.log('My name is ' + this.name);
    }
}

noReturn("test1", "test2");

person.sayName();


