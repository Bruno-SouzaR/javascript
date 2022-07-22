const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'

]

// Retonar um array apenas com os precos

// tranformar JSON em OBJ
const paraobjeto = json => JSON.parse(json) 
const apenaspreco = produto => produto.preco

const resultado = carrinho.map(paraobjeto).map(apenaspreco)
console.log(resultado)