import { useEffect, useState } from "react"
import Post from "../core/Post"
import Botao from "./Botao"
import Entrada from "./Entrada"

interface ComentarioFormProps {
    post: Post
    comentarioMudou?: (comentario: Post) => void
}

export default function PostForm(props: ComentarioFormProps) {

    const [post, setPost] = useState<Post>(Post.vazio())

    const id = props.post?.id
    const [userName, setUserName] = useState(props.post?.userName ?? '')
    const [coment, setComentario] = useState(props.post?.coment ?? '')

    return (
        <div>
            <div className={` flex justify-center mb-3`}>
                {id ? (
                    <Entrada
                        somenteLeitura
                        texto="Código"
                        valor={`EDITAR POST DE ID <<${id}>>`}
                    />
                ) : false}
            </div>
            <div className={` flex justify-center mb-3`}>
                <Entrada
                    texto="Nome"
                    valor={userName}
                    valorMudou={setUserName}
                />
            </div>
            <div className={` flex justify-center mb-3 h-40`}>
                <Entrada
                    texto="Comentario"
                    valor={coment}
                    valorMudou={setComentario}
                />
            </div>
            <div className="flex justify-center mt-2 mb-5">
                <Botao
                    onClick={() => props.comentarioMudou?.(new Post(userName, coment, id))}>
                    {id ? 'Alterar' : 'Enviar'}
                </Botao>
            </div>
        </div >
    )

}