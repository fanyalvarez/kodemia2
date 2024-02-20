const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

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

router.get('/', isAuth, UserController.getAll)
router.post('/', isAuth, UserController.post)
router.put('/:id', isAuth, UserController.put)
router.delete('/:id', isAuth, UserController.delete)
router.get('/:id', isAuth, UserController.getById)

router.post('/login', UserController.login)

module.exports = router