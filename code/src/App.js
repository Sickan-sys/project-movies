import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar } from 'components/NavBar'
import { MovieList } from 'pages/MovieList'
import { MovieDetails } from 'pages/MovieDetails'

export const App = () => {
  return (
   <BrowserRouter>
   <NavBar />
  <main>
   <Switch>
     <Route path="/" exact>
    <MovieList />
     </Route>
     <Route path="/movie/:movieId">
       <MovieDetails />
     </Route>
   </Switch>
  </main>
   </BrowserRouter>
  )
}
