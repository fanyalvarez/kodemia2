const createError = require("http-errors")
const User = require("../models/user.model.js")
const encryption = require("../lib/encryptiohn.js")

async function signUp(data) {
    const existUser = await User.findOne({ email: data.email });

    if (existUser) {
        throw createError(409, "User already exist")
    }

    const passwordEncrypted = encryption.hash(data.password)

    data.pasword = passwordEncrypted

    return User.create(data)
}

async function signIn(data) {
    const user = await User.findOne({ email });
    if (!user) {
        throw createError(401, "Invalid credentials")
    }
    const isPasswordVerified = encryption.compare(password, user.password)

    if (!isPasswordVerified) {
        throw createError(401, "Invalid credentials")
    }
    // generar JWT token
    return jwt.sign({ user: user._id, role: user.role })


}

async function getById(id) {
    const { password, ...user } = await User.findById(id).lean()
    return user
}

module.exports = {
    signUp, signIn, getById
}