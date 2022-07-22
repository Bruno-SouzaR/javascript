Array.prototype.map2 = function(callback) {
    const newarray = []
    for (let i = 0; i < this.length; i++) {
        newarray.push(callback(this[i], i, this))
    }
    return newarray
}

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

const resultado = carrinho.map2(paraobjeto).map2(apenaspreco)
console.log(resultado)