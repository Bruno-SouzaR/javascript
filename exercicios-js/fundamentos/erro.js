function tratarerroelancar(erro) {
   // throw new Error('...')
   // throw 10
   // throw true
   // throw 'mensagem'
   throw {
        nome: erro.name,
        msg: erro.messege,
        date: new Date
   }
}

function imprimirnomegritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarerroelancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto' }
imprimirnomegritado(obj) 