const jwt = require('jsonwebtoken')
const JWT_SIGN = process.env.JWT_SIGN

function createJWT(data) {
    return jwt.sign(data, JWT_SIGN, {expiresIn: '1h'})
}

function verifyJWT(req, res, next) {

    try {
        const token = req.headers['bearerauth']
        const dateNow = new Date()

        if (!token) {
            res.status(401).send("login is required")
        }

        jwt.verify(token, JWT_SIGN, (err, data) => {
            if (err) {
                res.status(401).send("token invalid")
            }
            if (data.exp < dateNow.getDate() / 1000) {
                res.status(401).send("session expired")
            }
            req.user = data
            next()
        })
    } catch (error) {
        res.status(400).send("token invalid")
    }   
}

module.exports = {
    createJWT,
    verifyJWT
}
