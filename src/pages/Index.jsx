import { useContext, useEffect } from "react"
import GlobalContext from "../context/GlobalContext"

function Index() {

    const { films, fetchData } = useContext(GlobalContext)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                {
                    films.map(film =>
                        <li key={film.id}>
                            <div>{film.title}</div>
                            <div>{film.original_title}</div>
                            <div>{film.original_language}</div>
                            <div>{film.vote_average}</div>
                        </li>
                    )
                }
            </div>
        </>
    )
}

export default Index