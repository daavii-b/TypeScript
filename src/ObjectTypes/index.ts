const objectA = {
    valueA: "A",
    valueB: "B",
};

// Após a criação do objeto, o TypeScript não irá permitir a criação de uma nova objeto.

// Permitir a troca de um valor de uma chave existente
objectA.valueA = "AB";

// TypeScript irá reclamar
// objectA.valuec = "New key";

// Maneiras de de types annotations para objetos

const objectB: Record<string, unknown> = {
    keyA: 'A',
    keyB: 'B',
};


const obejctC:{
    keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown;
}  = {
    keyA: 'A',
    keyB: 'B',
}
