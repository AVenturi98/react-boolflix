import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"
import ItemsList from "../components/ItemsList"
import Header from '../components/header/Header'


function Index() {

    const { films, series } = useContext(GlobalContext)



    return (
        <>
            <Header />
            <ItemsList items={films} title='Movies' />
            <ItemsList items={series} title='Series' />
        </>
    )
}

export default Index