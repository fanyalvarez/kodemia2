const fs = require('fs')


async function readFile(path = "./src/lib/db.json") {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            const arrayData = JSON.parse(data)
            resolve(arrayData)
        })
    })
}

module.exports = readFile
