import { useState } from "react"
import GlobalContext from "./context/GlobalContext"
import axios from "axios"
import Index from './pages/Index.jsx'


function App() {

  const [films, setFilms] = useState([])

  function fetchData() {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: { query: 'batman', language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmE5NDkyYjA4MDczODYzN2Y1M2RmNmJmZmE2YjhjMyIsIm5iZiI6MTczNDAwMTk5My42MzkwMDAyLCJzdWIiOiI2NzVhYzU0OTlhZTUyNmQ1MDhhOWNmOGIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5QxtZmHBD5OWY4MsxJKFi1Me51dzgXlbXp0-CsDINX8'
      }
    })
      .then(res => {
        console.log(res.data)
        setFilms(res.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <GlobalContext.Provider value={{ films, fetchData }}>
        <Index />
      </GlobalContext.Provider>
    </>
  )
}

export default App
