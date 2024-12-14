import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"
import ItemsList from "../components/ItemsList"


function Index() {

    const { fetchData, search, setSearch, films, series } = useContext(GlobalContext)



    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="cerca.." value={search} onChange={(e) => setSearch(e.target.value)} />
                <input type="submit" onClick={() => fetchData()} value='Submit' />
            </form>
            <ItemsList items={films} title='Movies' />
            <ItemsList items={series} title='Series' />
        </>
    )
}

export default Index