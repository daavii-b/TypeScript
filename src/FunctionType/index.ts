type MapStringType = (item: string) => string;

function mapString(array: string[], callbackFn: MapStringType): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackFn(array[i]));
    }

    return newArray;
}


const abc = ['a', 'b', 'c', 'd', 'e']
const abcMapped = mapString(abc, item =>  item.toUpperCase())

console.log(abcMapped);


export {}
