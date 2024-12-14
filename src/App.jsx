import { useState, useEffect } from "react"
import GlobalContext from "./context/GlobalContext"
import axios from "axios"
import Index from "./pages/Index"


function App() {

  const [films, setFilms] = useState([])
  const [series, setSeries] = useState([])
  const [search, setSearch] = useState('')

  function fetchFilms() {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: { query: search, language: 'it-IT', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmE5NDkyYjA4MDczODYzN2Y1M2RmNmJmZmE2YjhjMyIsIm5iZiI6MTczNDAwMTk5My42MzkwMDAyLCJzdWIiOiI2NzVhYzU0OTlhZTUyNmQ1MDhhOWNmOGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5QxtZmHBD5OWY4MsxJKFi1Me51dzgXlbXp0-CsDINX8'
      }
    })
      .then(res => {
        setFilms(res.data.results)
      })
      .catch(err => console.error(err))
  }

  function fetchSeries() {
    axios.get('https://api.themoviedb.org/3/search/tv', {
      params: { query: search, language: 'it-IT', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmE5NDkyYjA4MDczODYzN2Y1M2RmNmJmZmE2YjhjMyIsIm5iZiI6MTczNDAwMTk5My42MzkwMDAyLCJzdWIiOiI2NzVhYzU0OTlhZTUyNmQ1MDhhOWNmOGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5QxtZmHBD5OWY4MsxJKFi1Me51dzgXlbXp0-CsDINX8'
      }
    })
      .then(res => setSeries(res.data.results.map(item => {
        return {
          ...item,
          title: item.name,
          orginal_title: item.orginal_name

        }
      })))
      .catch(err => console.error(err))
  }

  // useEffect(() => {
  //   setFilms(films.filter((film) => film.title.includes(search)))
  //   setSeries(series.filter((serie) => serie.title.includes(search)))
  // }, [search])


  function fetchData() {
    fetchFilms()
    fetchSeries()
  }
  return (
    <>
      <GlobalContext.Provider value={{ fetchData, search, setSearch, films, series }}>
        <Index />
      </GlobalContext.Provider>
    </>
  )
}

export default App
