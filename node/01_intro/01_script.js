// --crear un script que reciba n cantidad de argumentos y los muestre en la termianl --
// --nota: no debe mostrar la ruta de node ni script--

// process.argv.forEach((val, index) => {
//     if (index >= 2) {
//         console.log(`${index}: ${val}`);
//     }
// });

// for (let index = 2; index < process.argv.length; index++) {
//  console.log( index,":",process.argv[index])
// }

// ----------------------------
// --crear un script que reciba n cantidad de numeros y muestre en terminal el promedio --
// const array = process.argv
// let totalNumbers = 0
// let sum = 0
// for (let index = 2; index < array.length; index++) {
//     const element = array[index];
//     if (!isNaN(element)) {
//         sum = sum + parseInt(element)
//         totalNumbers++
//     }
// }

// console.log(sum / totalNumbers)

// ----------------------------
// crear un script que reciba n cantidad de argumentos y qeu los mestre en la terminal de manera inversa
// no mostrar path ni script
// const array = process.argv.slice(2)
// console.log(array.reverse())

// ----------------------------
const alumnos = {
    Juan: [10, 5, 8, 9, 7],
    diana: [10, 9, 9, 8, 10],
    roberto: [6, 8, 5, 9, 10]
}
const user = process.argv[2]
let sum = 0
console.log(user, "user")

// const arrayUser = Object.keys(alumnos)
// const found = arrayUser.findIndex((element) => element == user);

// if (found == -1) {
//     console.log("usuario no encontrado")
// } else {
//     alumnos[user].forEach(element => {
//         sum = sum + element
//     });
//     console.log(sum / (alumnos[user].length))
// }

// mejorar con lo siguente
if (alumnos[user] !== undefined) {
    for (let index = 0; index < alumnos[user].length; index++) {
        sum += alumnos[user][index]
    }
    console.log(sum / alumnos[user].length)
} else {
    console.log("usuario no encontrado")

}











const doesItExist = (type) => {
    return fs.readdir(`.`,
        { withFileTypes: false },
        (err, files) => {
            console.log(" directory files:");
            if (err) throw err;
            else {
                files.forEach(file => {
                    if (file === type) {
                        return true
                    }
                })
                return false;
            }
        })
}