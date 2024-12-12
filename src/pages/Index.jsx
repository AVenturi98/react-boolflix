import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"
import Card from "../components/Card"

function Index() {

    const { films, setFilms, fetchFilms } = useContext(GlobalContext)
    const [search, setSearch] = useState('batman')

    useEffect(() => {
        fetchFilms()
    }, [])

    useEffect(() => {
        setFilms(films.filter((film) => film.title.includes(search)))
    }, [search])

    return (
        <>
            <form action="">
                <input type="text" placeholder="cerca.." value={search} onChange={(e) => setSearch(e.target.value)} />
                {/* <input type="submit" /> */}
            </form>
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