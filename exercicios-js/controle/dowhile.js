function getinterioaleatorioentre (min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
} 

let opcao = -1

do {
    opcao = getinterioaleatorioentre (-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`)
} while(opcao != -1)