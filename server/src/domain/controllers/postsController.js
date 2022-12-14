// const { Request, Response } = require("express");
const Posts = require("../models/Posts");

const postsController = {

    //OK
    async createPost(req, res) {
        // console.log(req.body);
        try {
            const { userName, coment } = req.body;

            if (!userName || !coment)
                return res.status(400).json({
                    message: 'usuário e conteúdo são obrigatórios!'
                })

            const newPost = await Posts.create({
                userName,
                coment
            });

            

            res.json(newPost);
        }

        catch (error) {
            console.error(error);
            res.json('Não foi possível publicar');

        }
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
            console.log(req.params.id);
            const id  = req.params.id;

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
            const id  = req.params.id;
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