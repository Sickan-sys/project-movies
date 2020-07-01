import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'

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
            <div className="loader">
            </div>
        )
    }

    return (
        <article className="movie-list">
            {movies.map((movie) => (
               <Link className="movies" to={`/movie/${movie.id}`} key={movie.id}>
               <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              
                <div className="movie-container">
                     <h1>{movie.title}</h1>
                     <p>Review Score: {movie.vote_average}/10</p>
                  </div>
              </Link>    
             ))}
     
        </article>
  )
}