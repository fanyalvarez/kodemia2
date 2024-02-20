require("dotenv").config()
const server = require("./src/server.js")
const db = require("./src/lib/db.js")

const port = process.env.PORT || 3000

db.connect()
    .then(() => {
        console.log("db connected")

        server.listen(port, () => {
            console.log(`server listening on port ${port}`)
        })
    })

    .catch((error) => {
        console.error("db no conect", error)
    })

