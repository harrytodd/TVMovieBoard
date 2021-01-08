import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return <div className="home">
    <section className="left">
      <Link className="home-butt" to="/TVMovieBoard//tv">TV Shows</Link>
    </section>
    <section className="right">
      <Link className="home-butt" to="/TVMovieBoard//movies">Movies</Link>
    </section>
  </div>
}

export default Home