const fs = require('fs')


async function writeFile(path = "./src/lib/db.json") {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(readFileJs, null, 4), (err) => {
            if (err) reject(err)
        })
    })
}

module.exports = writeFile
