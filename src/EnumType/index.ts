// Utilizado para algo que tenha multiplo escolha

enum Colors {
    RED = 100, // 0 // as chaves de um ENUM podem ser alteradas
    BLUE, // 1
    GREEN, // 2
}

// Se houver 2 ENUMs com o mesmo nome, ele serão mesclados(merge)

// enum Cores {
//     WHITE,
//     GRAY= 12,
//     PINK = 13,
// }


// console.log(Cores)

function chooseAColor(color: Colors): void {
    console.log(Colors[color])
}


chooseAColor(Colors.BLUE);
