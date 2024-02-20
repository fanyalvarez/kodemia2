console.log("holi")

const fs = require('fs')

//crear archivos
fs.writeFile('./example.txt', "hola kod", (err) => {
    if (err) throw new  Error ("no se puede crear")
    console.log("archivo creado")
})

fs.readFile('./example.txt', "hola kod", (err,data) => {
    if (err) throw err
    console.log(data)
})
fs.appendFile('./example.txt', `actualizado ${new date}`, (err,data) => {
    if (err) throw err
    console.log("arch act")
    fs.readFile('./example.txt', "utf-8", (err,data) => {
        if (err) throw err
        console.log(data)
    })
})
fs.unlink('./example.txt', "hola kod", (err,data) => {
    if (err) throw err
    console.log(data)
})

fs.mkdir()