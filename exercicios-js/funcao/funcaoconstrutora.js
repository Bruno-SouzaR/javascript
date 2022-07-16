function carro(velocidademaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeatual = 0

    // metodo publico
    this.acelarar = function() {
        if(velocidadeatual + delta <= velocidademaxima) {
            velocidadeatual += delta
        } else {
            velocidadeatual = velocidademaxima
        }
    }
    // metodo publico
    this.getvelocidadeatual = function() {
        return velocidadeatual
    }
}

const uno = new carro
uno.acelarar()
uno.acelarar()
console.log(uno.getvelocidadeatual())

const ferrari = new carro(350, 20)
ferrari.acelarar()
ferrari.acelarar()
ferrari.acelarar()
console.log(ferrari.getvelocidadeatual())

console.log(typeof carro)
console.log(typeof ferrari)