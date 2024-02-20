const express = require('express')
const postsRouter = require("./routers/post.router.js")
const userRouter = require("./routers/user.router.js")

const server = express()

server.use(express.json())
server.use("/posts", postsRouter)
server.use("/user", userRouter)

server.get("/", (request, response) => {
    response.json({
        message: "API repaso v1",
        success: true
    })
})


module.exports = server