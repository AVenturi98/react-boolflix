import flagBG from '../assets/gb.png'
import flagIT from '../assets/it.png'
import flagFR from '../assets/fr.png'
import flagES from '../assets/es.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as empty } from '@fortawesome/free-regular-svg-icons'

export default function Card({ item = [] }) {

    const { title, original_title, original_language, vote_average, poster_path } = item

    const flagsLanguage = {
        it: flagIT,
        en: flagBG,
        es: flagES,
        fr: flagFR
    }

    const vote = Math.floor(((vote_average) / 9) * 4 + 1)

    // const fullStar = '★'.repeat(vote)
    // const emptyStar = '☆'.repeat(5 - vote)
    const fullStar = Array(vote).fill(<div><FontAwesomeIcon icon={faStar} /> </div>)
    const emptyStar = Array(5 - vote).fill(<div><FontAwesomeIcon icon={empty} /> </div>)




    return (
        <>
            <img src={'https://image.tmdb.org/t/p/w200' + poster_path} alt="" />
            <div>{title}</div>
            <div>{original_title}</div>
            <img src={flagsLanguage[original_language]} />
            <div>{[...fullStar, ...emptyStar]}</div>
        </>
    )
}