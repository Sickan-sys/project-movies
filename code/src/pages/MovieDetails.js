import React, { useEffect, useState } from'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const MovieDetails = () => {
      const { movieId } = useParams()
      const [movie, setMovie] = useState([])

      useEffect (() => {
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=7de727a43e3ae387d21f4d4592c2bf29&language=en-US`)
          .then((res) => res.json())
          .then((json) => {
              setMovie(json.movie)
          })
      }, [movieId])

    if (movie === undefined) {
        return (
            <div ClassName="Loader"></div>
        )
    }

  return (
    <div ClassName="movie-details-wrapper"
        style={{ backgrundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>

        <link 
        to="/">
        <h3> Movies</h3>
        </link>
        <h1>{movie.original_title}</h1>

        <div className="poster-text-wrapper">
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.original_title} />
                <div ClassName="overview-rating-wrapper">
                        <p>{movie.overview}</p>
                        <span>
                        <h2>Ratings:{movie.vote_average}/10 // Released:{movie.release_date} </h2>
                        </span>
                </div>
        </div>
    </div>
      )  
    
}