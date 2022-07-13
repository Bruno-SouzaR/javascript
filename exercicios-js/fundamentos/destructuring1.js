const pessoa = {
    nome: 'ana',
    idade: 18,
    endereco: {
        logradouro:'rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// erro
//const { conta: { ag, num }} = pessoa
// console.log(ag, num) 