function isAdmin(req, res, next) {
    const auth = req.headers.authorization

    if (re.user.rol === "admin") {
        next()
    } else {
        res.status(401).send("rol not aunth")
    }
}

module.exports = {
    isAdmin
}