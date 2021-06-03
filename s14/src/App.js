import React, { useCallback, useEffect, useState } from 'react'

import MoviesList from './components/MoviesList'
import './App.css'
import AddMovie from './components/AddMovie'

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://react-http-fc47b-default-rtdb.firebaseio.com/movies.json'
      )
      if (!response.ok) {
        throw new Error('Error')
      }
      const data = await response.json()

      const loadedMovies = []
      for (let key in data) {
        loadedMovies.push({
          ...data[key],
          id: key
        })
      }

      setMovies(loadedMovies)
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  const addMovieHandler = async (movie) => {
    try {
      await fetch(
        'https://react-http-fc47b-default-rtdb.firebaseio.com/movies.json',
        {
          method: 'POST',
          body: JSON.stringify(movie),
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  const MoviesListState = () => {
    let content = <p>Found no movies</p>

    if (movies.length > 0) {
      content = <MoviesList movies={movies} />
    }
    if (error) {
      content = <p>{error}</p>
    }
    if (isLoading) {
      content = <p>isLoading...</p>
    }
    return content
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesListState />
      </section>
    </React.Fragment>
  )
}

export default App
