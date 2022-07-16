function pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome e ${this.nome}`)
    }
}

const p1 = new pessoa('Joao')
p1.falar()
console.log(p1.nome)