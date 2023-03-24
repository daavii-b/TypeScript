//  Array<T> or T[]

function multiplyArgs(...args: Array<number>):number {
    return args.reduce((ac, valor, ) => ac * valor, 1)
}

function concatStrings(...args: string[]): string {
    return args.reduce((ac, valor, ) => ac + valor)
}

function toUpperCase(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase())
}

const result = multiplyArgs(1, 2, 3)
const result2 = concatStrings('a', 'b', 'c')
const result3 = toUpperCase('a', 'b', 'c')
console.log(result)
console.log(result2)
console.log(result3)


export default result
