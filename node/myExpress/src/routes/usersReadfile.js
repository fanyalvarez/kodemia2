const express = require('express')
const router = express.Router()
const fs = require('fs')
const readFile = require('../helpers/readFile')
const writeFile = require('../helpers/writeFile')

// dont forget==crud son metodos

function isAuth(req, res, next) {
    const auth = req.headers.role
    console.log(auth)

    if (auth === "admin" && (req.method == "GET" || req.method == "POST" || req.method == "PUT" || req.method == "DELETE")) {
        console.log("auth by admin rol is ok ")
        next()
    } else if (auth === "seller" && (req.method == "GET" || req.method == "POST")) {
        console.log("auth by seller rol is ok ")
        next()
    } else { res.status(401).send("you cant access") }
    // console.log("auth finished")
}

router.get('/', isAuth, async (req, res) => {
    // res.status(200).send('Get user,')
    try {
        const readFileJs = await readFile()
        res.send(readFileJs)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/', isAuth, async (req, res) => {
    let dataBody = req.body

    try {
        const readFileJs = await readFile()
        readFileJs.push(dataBody)
        const writeFileJs = await writeFile()
        res.status(201).send(req.body)

    } catch (error) { res.status(404).send(error) }
})

router.put('/:id', isAuth, async (req, res) => {
    let params = Number(req.params.id)

    try {
        const readFileJs = await readFile()
        const findUser = readFileJs.findIndex(({ id }) => id === params);
        // console.log(findUser)
        if (findUser === -1) {
            res.status(404).send('User not exist')
        } else {
            readFileJs.splice(findUser, 1, req.body);
        }

        const writeFileJs = await writeFile()
        res.status(201).send(req.body)

    } catch (error) {
        res.status(404).send(error)
    }
})

router.delete('/:id', isAuth, async (req, res) => {
    let params = Number(req.params.id)

    try {
        const readFileJs = await readFile()
        const findPost = readFileJs.findIndex(({ id }) => id === params);
        if (findPost === -1) {
            res.status(404).send('Post not exist')
        } else {
            readFileJs.splice(findPost, 1);
            resolve(readFileJs)
        }
        const writeFileJs = await writeFile()
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/:id', isAuth, async (req, res) => {
    let params = Number(req.params.id)

    try {
        const readFileJs = await readFile()
        const result = readFileJs.find(({ id }) => id === params);
        if (result === undefined) {
            res.status(404).send('User not exist')
        } else { res.send(result) }
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router