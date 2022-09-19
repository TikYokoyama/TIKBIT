interface EntradaProps {
    texto: string
    valor: any
    valorMudou?: (valor: any) => void
    somenteLeitura?: boolean
}

export default function Entrada(props: EntradaProps) {
    return (
        <textarea
            className={` flex flex-col mb-1 w-1/2 border border-yellow-500 rounded-lg bg-orange-50 focus:outline-none px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}
            `}
            // maxLength="200"
            placeholder={props.texto}
            value={props.valor}
            onChange={e => props.valorMudou?.(e.target.value)} />
    )
}