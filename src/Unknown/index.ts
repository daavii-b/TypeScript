// Unknown o primeiro da hierarquia dos tipos

// Mais seguro que o unknown

let x: unknown;


x = 10

x = 20

x = '30'



const y: number = 20;


// Ó TS irá reclamar sobre o tipo
// console.log(x + y)

x = 10

// Unknown irá força-lo a fazer a checagem de tipo;

if (typeof x === 'number') console.log(x + y)


