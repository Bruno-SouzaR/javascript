// usando a notacao literal

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object 
console.log(obj2)

// Funcoes construturas
function produto(nome, preco, desc) {
    this.nome = nome
    this.getprecocomdesconto = () => {
        return preco * (1 - desc)
    }
}    

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2998.99, 0.25)
console.log(p1.getprecocomdesconto(), p2.getprecocomdesconto())

// funcao factory
function criarfuncionario(nome, salariobase, faltas) {
    return {
        nome,
        salariobase,
        faltas,
        getsalario() {
            return (salariobase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarfuncionario('Joao', 7980, 4)
const f2 = criarfuncionario('Maria', 11400, 1)
console.log(f1.getsalario(), f2.getsalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funcao famosa que retorna objeto...
const fromjson = JSON.parse('{"info": "sou um JSON"}')
console.log(fromjson)