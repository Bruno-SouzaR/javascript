// pessoa -> 123 -> {...}
const pessoa = { nome: 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaconstante = Object.freeze({ nome: 'Joao'})
pessoaconstante.nome = 'Maria'
console.log(pessoaconstante)