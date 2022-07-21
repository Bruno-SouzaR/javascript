const quasearray = { 0: 'Rafael', 1: 'Ana', 2:'Bia'}
console.log(quasearray)
Object.defineProperty(quasearray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quasearray[0])

const meuarray = ['Rafael', 'Ana', 'Bia']
console.log(quasearray.toString(), meuarray)