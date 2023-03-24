let x; // undefined


export function createPerson(firstName: string, lastName?: string): {
    firstName: string,
    lastName?: string,
} {
    return {
        firstName,
        lastName
    }
}

export function squareOf(x: any): number | null {
    if (typeof x === 'number') return x * x;

    return null;
}
