import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
    const [movies, setMovies] = useState(undefined)

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7de727a43e3ae387d21f4d4592c2bf29&language=en-US&page=1')
        .then((res) => res.json())
        .then((json) => {
            setMovies(json.results)
            console.log(json.results)
        })
        .catch(error => {
            console.log(error)
        })
    }, []) 

    if (movies === undefined) {
        return (
            <div ClassName="loader">
            </div>
        )
    }

    return (
        <div ClassName="movie-list">
            {movies.map((movie => (
               <Link 
               to={`/movie/${movie.id}`}
               key={movie.id}
               img src={`url(https://image.tmdb.org/t/p/w1280${movie.poster_path})`} alt={movie.title}
              >
                <div ClassName="movie-container">
                    <h1>{movie.title}</h1>
                    <div ClassName="overview-release-wrapper">
                         <p>{movie.overview}</p>
                        <h2>{movie.vote_average}/10</h2>
                    </div>
                    
                </div>
              </Link>    
             )))}
     
        </div>
  )
}