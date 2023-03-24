//  Tuples
const clientData: readonly [number,string] = [1, 'Davis']; //Imutável
const clientData1: [number, string, string] = [1, 'Davis', 'Brito'];
const clientData2: [number, string, number?] = [1, 'Davis', 1];
const clientData3: [number, string, ...string[]] = [1, 'Davis', ...['davi', 'brito']];

console.log(clientData);
console.log(clientData1);
console.log(clientData2);
console.log(clientData3);


// ReadOnly Array
const array: ReadonlyArray<string> = ['systemd']
