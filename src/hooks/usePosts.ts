import { useState } from 'react';
import Post from '../core/Post';
import { createPost, deletePost, updatePost } from '../services/postServices';
export default function usePosts(){

    const [post, setPost] = useState<Post>(Post.vazio())

    function selecionarPost(post: Post) {
        console.log(post.id);
        console.log(post.userName);
        setPost(post)
    }

    function excluirPost(post: Post) {
        deletePost(post)
        alert("Post deletado com sucesso!")
        window.location.reload()
    }

    function criarPost(post: Post) {
        createPost(post)
        alert("Post criado com sucesso!")
        window.location.reload()
    }
    function alterarPost(post: Post) {
        updatePost(post)
        alert("Post atualizado com sucesso!")
        window.location.reload()
    }

    return{
        post,
        selecionarPost,
        excluirPost,
        criarPost,
        alterarPost
    }
    
}