// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // nao faca isso em casa
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2:'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velatual: 0,
    velmax: 200,
    acelerarmais(delta) {
        if(this.velatual + delta <= this.velmax) {
            this.velatual += delta
        } else {
            this.velatual = this.velmax
        }
    },
    status() {
        return `${this.velatual}km/h de ${this.velmax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velmax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarmais(100)
console.log(volvo.status())

ferrari.acelerarmais(300)
console.log(ferrari.status())