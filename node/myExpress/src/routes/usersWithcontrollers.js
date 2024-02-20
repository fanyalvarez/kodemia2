const express = require('express')
const router = express.Router()
const fs = require('fs')
// const readFile = require('../helpers/readFile')
const writeFile = require('../helpers/writeFile')
const User = require('../models/users')

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
        const readFileJs = await User.find()
        res.send(readFileJs)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/', isAuth, async (req, res) => {
    let dataBody = req.body

    try {
        const readFileJs = await User.create(dataBody)
        await readFileJs.save()
        res.status(201).send(dataBody)

    } catch (error) { res.status(404).send(error) }
})

router.put('/:id', isAuth, async (req, res) => {
    let { id } = req.params
    let dataBody = req.body

    try {
        const readFileJs = await User.findByIdAndUpdate(id, dataBody)
        res.status(201).send(dataBody)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.delete('/:id', isAuth, async (req, res) => {
    let { id } = req.params
    console.log(id)
    try {
        const readFileJs = await User.findByIdAndDelete(id)
        resolve(readFileJs)
        res.status(200).send("User deleted")
    } catch (error) {
        res.status(404).send(error)
    }
})

router.get('/:id', isAuth, async (req, res) => {
    let { params } = req.params

    try {
        if (!params) {
            res.status(404).send('User not exist')
        } else {
            const readFileJs = await User.findById(params)
            res.send(readFileJs)
        }
    } catch (error) {
        res.status(404).send(error)
    }
})


module.exports = router