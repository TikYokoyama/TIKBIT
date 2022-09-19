interface BotaoProps {
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-yellow-400 to-orange-400
            text-white px-4 py-2 rounded-md 
        `}>
            {props.children}
        </button>
    )
}