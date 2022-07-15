const pessoa = {
    saudacao: 'Bom dia',
    falar() {
       console.log(this.saudacao) 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // confllito entre paradigmas: funcional e oo

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()