const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorsalario = (func, funcatual) => {
    return func.salario < funcatual.salario ? func : funcatual
}

axios.get(url).then(Response => {
    const funcionarios = Response.data
    //console.log(funcionarios)

    // Mulher chinesa com menor salario?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorsalario)

    console.log(func)

})

