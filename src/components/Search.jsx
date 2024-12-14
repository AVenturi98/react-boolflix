import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"

export default function Search() {

    const { fetchData, search, setSearch } = useContext(GlobalContext)

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="cerca.." value={search} onChange={(e) => setSearch(e.target.value)} />
            <input type="submit" onClick={() => fetchData()} value='Submit' />
        </form>
    )
}