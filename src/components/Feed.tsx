import Post from "../core/Post"
import { IconeEdicao, IconeLixo } from "./Icones"

interface FeedProps {
    posts: Post[]
    postSelecionado?: (post: Post) => void
    postExcluido?: (post: Post) => void
}

export default function Feed(props: FeedProps) {

    const exibirAcoes = props.postExcluido || props.postSelecionado

    function renderizarDados() {
        return props.posts.map((post) => {
            return (
                <div className={`flex rounded-lg bg-white mb-4 justify-between`} key={post.id}>
                    <div>
                        <h1 className={`px-4 py-1 text-base `}>{post.id}- {post.userName}</h1>
                        <p className={`px-4 py-2 text-sm`}>{post.coment}</p>
                    </div>
                    <div className={`justify-end`}>
                        {exibirAcoes ? renderizarAcoes(post) : false}
                    </div>
                </div>
            )
        })
    }

    function renderizarAcoes(post: Post) {
        return (
            <div className="flex flex-col mt-2 mr-2">
                {props.postSelecionado ? (
                    <button onClick={() => props.postSelecionado?.(post)} className={`flex justify-center items-center text-green-400 hover:bg-green-200 rounded-lg`}>{IconeEdicao}</button>
                ) : false}
                {props.postExcluido ? (
                    <button onClick={() => props.postExcluido?.(post)} className={`flex justify-center items-center text-red-400 hover:bg-red-200 rounded-lg`}>{IconeLixo}</button>
                ) : false}
            </div>
        )
    }

    return (
        <div className={`flex-col rounded-lg focus:outline-none w-1/2 justify-center mt-4`}>
            {renderizarDados()}
        </div>
    )
}