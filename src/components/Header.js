import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <nav>
    <button><Link className="link" to="/TVMovieBoard//tv">TV</Link></button> 
    <button><Link className="link" to="/TVMovieBoard//movies">MOVIES</Link></button> 
  </nav>

}
export default Header