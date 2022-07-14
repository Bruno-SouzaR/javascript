function getinteiroaleatorioentre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 6

while(opcao != -1) {
    opcao = getinteiroaleatorioentre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('ate a proxima')