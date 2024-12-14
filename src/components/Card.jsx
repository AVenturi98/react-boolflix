import flagBG from '../assets/gb.png'
import flagIT from '../assets/it.png'
import flagFR from '../assets/fr.png'
import flagES from '../assets/es.png'

export default function Card({ item = [] }) {

    const { title, original_title, original_language, vote_average } = item

    const flagsLanguage = {
        it: flagIT,
        en: flagBG,
        es: flagES,
        fr: flagFR
    }

    return (
        <>
            <div>{title}</div>
            <div>{original_title}</div>
            <img src={flagsLanguage[original_language]} />
            <div>{vote_average}</div>
        </>
    )
}