const contadora = require('./instanciaunica')
const contadorb = require('./instanciaunica')

const contadorc = require('./instancianova')()
const contadord = require('./instancianova')()

contadora.inc()
contadora.inc()
console.log(contadora.valor, contadorb.valor)

contadorc.inc()
contadorc.inc()
console.log(contadorc.valor, contadord.valor)