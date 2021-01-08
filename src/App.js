import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import components
import Home from './components/Home'
import Movies from './components/Movies'
import TV from './components/TV'
import Movie from './components/Movie'
import Series from './components/Series'
import Season from './components/Season'



const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/TVMovieBoard" component={Home} />
      <Route exact path="/TVMovieBoard/movies" component={Movies} />
      <Route exact path="/TVMovieBoard/tv" component={TV} />
      <Route exact path="/TVMovieBoard/movies/:id" component={Movie} />
      <Route exact path="/TVMovieBoard/tv/:id" component={Series} />
      <Route exact path="/TVMovieBoard/tv/:id/:season" component={Season} />
    </Switch>
  </BrowserRouter>
)

export default App