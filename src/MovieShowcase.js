import React, { Component } from 'react';
import CardFront from './card-components/CardFront.js';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
   
  
   return movieData.map((movie, index) => <MovieCard 
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}  
          poster={movie.poster}
          key={index}
      /> )
  
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
       
      </div>
    )
  }
}
