function aula(nome, videoid) {
    this.nome = nome
    this.videoid = videoid
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Ate breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = new aula('Bem vindo', 123)
const aula4 = new aula('Ate breve', 456)
console.log(aula3, aula4)