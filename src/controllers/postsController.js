const { request } = require("express");
const Posts = require("../models/Posts");

const postsController = {

    //OK
    async createPost(req, res) {
        const { userName, coment } = req.body;

        if (!userName || !coment ) {
            return res.status(400).json("Preencha todos os campos corretamente");
        };

        const newComment = await Posts.create({
            userName,
            coment,
        });
        res.status(201).json(newComment);
    },

    //OK
    async listPosts(req, res) {
        try {

            const posts = await Posts.findAll();

            return res.status(200).json(posts);

        }
        catch (error) {
            console.log(error);
            return res.status(500).json("Não foi possível listar os posts")
        }
    },

    //OK
    async deletePost(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json("id nao encontrado");
            }

            await Posts.destroy({
                where: {
                    id
                }
            })

            return res.status(204).json("Post deletado com sucesso");

        } catch (error) {
            res.json("Falha ao tentar deletar Post");
            console.error(error);
        }
    },

    //OK
    async updatePost(req, res) {
        try {
            const { id } = req.params;
            const { userName, coment} = req.body;

            if (!id) {
                return res.status(400).json("Id nao encontrado");
            }

            await Posts.update(
                {
                    userName,
                    coment,
                },
                {
                    where: {
                        id
                    }
                }
            );

            const updatedPost = await Posts.findByPk(id);

            return res.status(200).json(updatedPost);

        } catch (error) {
            res.status(404).json("Verfique os dados e tente novamente");
            console.error(error);
        }
    },

}

module.exports = postsController;