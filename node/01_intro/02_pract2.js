const fs = require('fs')

let link = process.argv[2]

fs.readFile(link, 'utf-8', (err, data) => {
    if (err) throw err
    console.log(typeof data, "data")  //get json
    console.log( data, "data")

    data = JSON.parse(data)
    console.log(typeof data , "objeto")  //pasar a objeto

    data['data'] = true  
    console.log(JSON.stringify(data) , "json") 


   fs.writeFile(link, JSON.stringify(data, null, 4), (err) => {
        if (err) throw err
        console.log("Archivo guardado")
    })
})

// terminal run link