const express = require('express')
const router = express.Router()
const fs = require('fs')

// dont forget==crud son metodos

function isAuth(req, res, next) {
    const auth = req.headers.role
    console.log(auth)

    try {
        if (auth === "admin" && (req.method == "GET" || req.method == "POST" || req.method == "PUT" || req.method == "DELETE")) {
            console.log("auth by rol is ok admin")
            next()
        }

        if (auth === "seller" && (req.method == "GET" || req.method == "POST")) {
            console.log("auth by rol is ok admin")
            next()
        }
    } catch (error) {
        res.status(401).send(error)
    }
}


router.get('/', isAuth, (req, res) => {
    // res.status(200).send('Get Post,')
    const getAllPosts = new Promise((resolve, reject) => {
        fs.readFile("./src/lib/db.json", (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })

    getAllPosts
        .then((data) => { res.send(data) })
        .catch(() => { res.sendStatus(404) })
})

router.post('/', isAuth, (req, res) => {
    // res.status(201).send('Post Post')
    let dataBody = req.body
    console.log(dataBody)

    const postPost = new Promise((resolve, reject) => {
        fs.readFile("./src/lib/db.json", 'utf-8', (err, data) => {
            if (err) throw err
            data = JSON.parse(data)
            data.push(dataBody)

            fs.writeFile("./src/lib/db.json", JSON.stringify(data, null, 4), (err) => {
                if (err) throw err
            })
        })
    })
    postPost
        .then(res.status(201).send('Post Post'))
        .catch(res.sendStatus(404))
})

router.put('/:id', isAuth, (req, res) => {
    let params = Number(req.params.id)
    // console.log(typeof params)

    const deletePost = new Promise((resolve, reject) => {
        fs.readFile("./src/lib/db.json", (err, data) => {
            if (err) reject(err)
            const arrayData = JSON.parse(data)
            const findPost = arrayData.findIndex(({ id }) => id === params);
            // console.log(findPost)
            if (findPost === -1) {
                res.status(404).send('Post not exist')
            } else {
                arrayData.splice(findPost, 1, req.body);
                resolve(arrayData)
                // console.log(arrayData)
            }
            fs.writeFile("./src/lib/db.json", JSON.stringify(arrayData, null, 4), (err) => {
                if (err) throw err
            })
        })
    })

    deletePost
        .then((arrayData) => { res.send(arrayData) })
        .catch(() => { res.sendStatus(404) })
})

router.delete('/:id', isAuth, (req, res) => {
    let params = Number(req.params.id)
    // console.log(typeof params)

    const deletePost = new Promise((resolve, reject) => {
        fs.readFile("./src/lib/db.json", (err, data) => {
            if (err) reject(err)
            const arrayData = JSON.parse(data)
        
            const findPost = arrayData.findIndex(({ id }) => id === params);
            // console.log(findPost)
            if (findPost === -1) {
                res.status(404).send('Post not exist')
            } else {
                arrayData.splice(findPost, 1);
                resolve(arrayData)
                // console.log(arrayData)
            }
            fs.writeFile("./src/lib/db.json", JSON.stringify(arrayData, null, 4), (err) => {
                if (err) throw err
            })
        })
    })

    deletePost
        .then((arrayData) => { res.send(arrayData) })
        .catch(() => { res.sendStatus(404) })
})

router.get('/:id', isAuth, (req, res) => {
    let params = Number(req.params.id)
    // console.log(typeof params)

    const getPost = new Promise((resolve, reject) => {
        fs.readFile("./src/lib/db.json", (err, data) => {
            if (err) reject(err)
            const arrayData = JSON.parse(data)
            const result = arrayData.find(({ id }) => id === params);
            if (result === undefined) {
                res.status(404).send('Post not exist')
            } else {
                resolve(result)
                // console.log(result)
            }
        })
    })

    getPost
        .then((result) => { res.send(result) })
        .catch(() => { res.sendStatus(404) })
})


module.exports = router