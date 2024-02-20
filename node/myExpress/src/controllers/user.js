const User = require('../models/users.js')
const { createJWT } = require('../middleware/authen.js')
const {isAdmin}= require("../middleware/authoriz.js")

module.exports = {
    getAll: async (req, res) => {
        try {
            const respPet = await User.find()
            res.status(200).send(respPet)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const respPet = await User.findById(req.params.id)
            res.status(200).send(respPet)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    post: async (req, res) => {
        try {
            const respPet = await User.create(req.body)
            await respPet.save()
            res.status(201).send(respPet)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    put: async (req, res) => {
        try {
            const respPet = await User.findByIdAndUpdate(req.params.id, req.body)
            res.status(202).send(req.body)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const respPet = await User.findByIdAndDelete(req.params.id)
            res.status(204).send("User deleted")
        } catch (error) {
            res.status(400).send(error)
        }
    },

    login: async (req, res) => {
        try {
            const dataBody = req.body
            const user = await User.findOne({ email: dataBody.email })
            if (!user) {
                res.status(401).send("user not found")
            }
            if (user.password != dataBody.password) {
                res.status(401).send("invalid password")
            } else {
                const token = createJWT({ _id: user._id, role: user.role })
                res.status(200).send({ msg: "login ivalid", token })
            }

        } catch (error) {
            console.log(error)
            res.status(400).send("login ivalid")
        }

    },
}