//  Intersection types

//  similar to AND operator

type HasName = {
    name: string
}

type HasAge = {
    age: number
}

type HasGender = {
    gender: string
}


type Person = HasName & HasAge & HasGender

const newPerson: Person = {
    name: 'User',
    age: 12,
    gender: 'male',
}


console.log(newPerson)

export {}


