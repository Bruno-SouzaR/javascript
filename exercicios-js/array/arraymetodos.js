const pilotos = ['Vettel', 'Alonso', 'raikkomen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

 // splice pode adicionar e remover elementos


 // Adicionar
 pilotos.splice(2, 0, 'Bottas', 'Massa')
 console.log(pilotos)

 // Remover
 pilotos.splice(3, 1)
 console.log(pilotos)

 const algunspilotos1 = pilotos.slice(2) // novo array
 console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2)