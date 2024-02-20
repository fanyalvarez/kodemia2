const Post = require("../models/posts.model.js")

function getAll() { 
    return Post.find()
}

function getById(id){
    return Post.findById(id)
}

function create(data){
    return Post.create(data)

}
module.exports = {getAll, getById, create}