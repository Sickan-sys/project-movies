import React, { useEffect, useState } from'react'
import { useParams, Link } from 'react-router-dom'
import './moviedetails.css'

export const MovieDetails = () => {
      const [movie, setMovie] = useState({})
      const { movieId } = useParams()
      
const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=7de727a43e3ae387d21f4d4592c2bf29&language=en-US`

      useEffect (() => {
          fetch(URL)
          .then((res) => res.json())
          .then((json) =>setMovie(json))
       
      }, [URL])

   const detailStyle = {
    backgroundImage: `url("http://image.tmdb.org/t/p/w342${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
   }


  return (
    <section className="movie-details-wrapper" style={detailStyle}>
    <div className="movie-poster">
      <div className="back-button">
        <Link to="/">
          Back
      </Link>
      </div>

      <div className="movie-poster">
        <img
          src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt="poster"
        />
        <div className="poster-text-wrapper">
          <h1 className="overview-wrapper">{movie.title}
          </h1>
          <h3>Review Score {movie.vote_average}/10
          </h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  </section>
  )
    
}