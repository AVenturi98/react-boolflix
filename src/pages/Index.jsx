import { useContext, useEffect } from "react"
import GlobalContext from "../context/GlobalContext"
import Card from "../components/Card"

function Index() {

    const { films, fetchFilms, titleFIlm } = useContext(GlobalContext)

    useEffect(() => {
        fetchFilms()
    }, [])

    return (
        <>
            <ul>{
                films.map((el, i) =>
                    <li key={i}>
                        <div >{el.title}</div>
                        <div >{el.original_language}</div>
                        <div >{el.original_title}</div>
                        <div >{el.vote_average}</div>

                    </li>)
            }</ul>
        </>
    )
}

export default Index