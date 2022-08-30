const express = require("express");
const routes = express.Router();

const PostsController = require('../domain/controllers/postsController');

routes.post('/', PostsController.createPost)
routes.get('/', PostsController.listPosts)
routes.delete('/:id', PostsController.deletePost)
routes.put('/:id', PostsController.updatePost)

module.exports = routes
