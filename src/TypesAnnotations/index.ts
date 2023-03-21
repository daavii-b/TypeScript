
// Tipos básicos (Inferencia de Tipos)

// String
const lastName = "last name";

// Number
const age = 30;

// Boolean
const greaterThan18 = true;

// Symbol
const sy = Symbol("symbol");

// Big Int


// Arrays

// const bigInt = 12n;

const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];

// Other way

const arrayOfStrings: string[] = ["a", "b", "c", "d",]

// Objects

// ? = optional parameter

const product: { name: string, value: number, promotionalValue?: number ,onSale: boolean } = {
    name:'MyProduct',
    value: 4.5,
    onSale: false
}

console.log(typeof lastName);
console.log(typeof age);
console.log(typeof greaterThan18);
console.log(typeof sy);
// console.log(typeof bigInt);

// Functions

function sum(x:number, y:number): number { return x + y; }

const result = sum(3, 3);

console.log(result);

const multiple: (x:number, y:number) => number = (x:number, y:number) => x * y;

const multipleResult = multiple(3, 3);
