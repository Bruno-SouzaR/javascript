function soboanoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soboanoticia(8.1)
soboanoticia(6.1)

function seforverdade(valor) {
    if(valor) {
        console.log('E verdade... ' + valor)
    }
}

seforverdade()
seforverdade(null)
seforverdade(undefined)
seforverdade(NaN)
seforverdade('')
seforverdade(0)
seforverdade(-1)
seforverdade(' ')
seforverdade('?')
seforverdade([])
seforverdade([1, 2])
seforverdade({})
