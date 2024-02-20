const express = require("express")
const postsUseCase = require("../usecases/post.usecase.js")

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allPost = await postsUseCase.getAll()

        response.json({
            success: true,
            message: "All psots",
            data: {
                posts: allPost
            }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            successs: false,
            error: error.message
        })
    }
})


router.post("/", async (request, repsonse) => {
    try {
        const newPost = await postsUseCase.create(request.body)
        response.json({
            success: true,
            message: "post created",
            data: {
                post: newPost
            }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            successs: false,
            error: error.message
        })
    }
})
module.exports = router