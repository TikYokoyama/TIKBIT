import PostForm from "../components/PostForm"
import Navbar from "../components/Navbar"
import Feed from "../components/Feed"
import usePosts from "../hooks/usePosts"

export async function getStaticProps() {
    const data = await fetch('http://localhost:5500/')
    const resposta = await data.json()
    const posts = resposta.reverse()

    return {
        props: { posts }
    }
}

export default function Home({ posts }) {

    const {
        post,
        alterarPost,
        criarPost,
        selecionarPost,
        excluirPost
    } = usePosts()

    return (
        <div className={` flex-col justify-center  /*bg-gradient-to-r from-orange-400 to-yellow-400*/`}>
            <Navbar />
            <PostForm post={post} comentarioMudou={post.id ? alterarPost : criarPost} />
            <div className={`flex justify-center`}>
                <Feed posts={posts}
                    postSelecionado={selecionarPost}
                    postExcluido={excluirPost} />
            </div>
        </div>
    )
}
