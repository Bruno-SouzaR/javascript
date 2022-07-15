let comparacomthis = function(param) {
    console.log(this === param)
}

comparacomthis(global)

const obj = {}
comparacomthis = comparacomthis.bind(obj)
comparacomthis(global)
comparacomthis(obj)

let comparacomthisarrow = param => console.log(this === param)
comparacomthisarrow(global)
comparacomthisarrow(module.exports)

comparacomthisarrow = comparacomthisarrow.bind(obj)
comparacomthisarrow(obj)
comparacomthisarrow(module.exports)