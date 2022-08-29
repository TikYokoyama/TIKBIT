import Entrada from "../components/Entrada"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"

export default function Home() {
    return (
        <div className={`flex-col h-screen justify-center  bg-gradient-to-r from-orange-400 to-yellow-400`}>
            <Navbar />
            <Entrada />
            <Posts />
            <Posts />
            <Posts />

        </div>
    )
}