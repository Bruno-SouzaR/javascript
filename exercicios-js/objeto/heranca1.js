const ferrari = {
    modelo: 'F40',
    velmax: 324
}

const volvo = {
    modelo: 'V40',
    velmax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuobjeto() {}
console.log(typeof Object, typeof meuobjeto)
console.log(Object.prototype, meuobjeto.prototype)