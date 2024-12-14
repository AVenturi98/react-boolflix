import { useState, useEffect } from "react"
import axios from "axios"
import flagBG from './assets/gb.png'
import flagIT from './assets/it.png'
import flagFR from './assets/fr.png'
import flagES from './assets/es.png'

function App() {

  const [films, setFilms] = useState([])
  const [search, setSearch] = useState('')
  const [flag, setFlag] = useState()

  function fetchFilms() {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: { query: search, language: 'it-IT', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmE5NDkyYjA4MDczODYzN2Y1M2RmNmJmZmE2YjhjMyIsIm5iZiI6MTczNDAwMTk5My42MzkwMDAyLCJzdWIiOiI2NzVhYzU0OTlhZTUyNmQ1MDhhOWNmOGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5QxtZmHBD5OWY4MsxJKFi1Me51dzgXlbXp0-CsDINX8'
      }
    })
      .then(res => {
        // console.log(res.data.results)
        setFilms(res.data.results)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    setFilms(films.filter((film) => film.title.includes(search)))
    console.log(films.filter((film) => film.title.includes(search)))
  }, [search])


  const flagsLanguage = {
    it: flagIT,
    en: flagBG,
    es: flagES,
    fr: flagFR
  }





  return (
    <>
      <div><img src={flagBG} alt="" /></div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="cerca.." value={search} onChange={(e) => setSearch(e.target.value)} />
        <input type="submit" onClick={() => fetchFilms()} value='Submit' />
      </form>
      <ul>{
        films.map((el, i) =>
          <li key={i}>
            <div >{el.title}</div>
            <div >
              <p>{el.original_title}</p>
            </div>
            <img src={flagsLanguage[el.original_language]} />
            <div >{el.vote_average}</div>
          </li>)
      }</ul>
    </>
  )
}

export default App
