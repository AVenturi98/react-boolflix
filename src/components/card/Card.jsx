import flagBG from '../../assets/gb.png'
import flagIT from '../../assets/it.png'
import flagFR from '../../assets/fr.png'
import flagES from '../../assets/es.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar as empty } from '@fortawesome/free-regular-svg-icons'
// import { useState } from 'react'
import st from './Card.module.css'
import { useState } from 'react'

export default function Card({ item = [] }) {

    const [hoverCard, setHoverCard] = useState(false)

    const { title, original_title, original_language, vote_average, poster_path, overview } = item

    const flagsLanguage = {
        it: flagIT,
        en: flagBG,
        es: flagES,
        fr: flagFR
    }

    const vote = Math.floor(((vote_average) / 9) * 4 + 1)

    const fullStar = '★'.repeat(vote)
    const emptyStar = '☆'.repeat(5 - vote)

    // const fullStar = Array(vote).fill(<div><FontAwesomeIcon icon={faStar} /> </div>)
    // const emptyStar = Array(5 - vote).fill(<div><FontAwesomeIcon icon={empty} /> </div>)

    function handle() {
        setHoverCard(!hoverCard)
    }

    return (
        <>
            <div className={st.container} onMouseOver={handle} onMouseOut={handle}>
                <img src={'https://image.tmdb.org/t/p/w200' + poster_path} alt={title} className={st.poster} />
                {hoverCard && < div className={st.hoverCard}>
                    <div><strong>Titolo: </strong> {title}</div>
                    <div><strong>Titolo originale: </strong> {original_title}</div>
                    <strong>Lingua: </strong>
                    {flagsLanguage[original_language] ?
                        <img src={flagsLanguage[original_language]} /> :
                        <span>{original_language}</span>}
                    <div><strong>Voto: </strong>{fullStar + emptyStar}</div>
                    {/* <div>
                        <strong>Overview: </strong>
                        <span className={st.overview}>{overview}</span>
                    </div> */}
                </div >}
            </div>
            {/* <div className='inline'>{[...fullStar, ...emptyStar]}</div> */}

        </>
    )
}