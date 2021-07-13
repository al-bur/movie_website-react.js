import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ year, title, poster, summary, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <div className="movie">
          <img src={poster} alt={title} title={title}/>
        <div className="movie_info">
          <h3 className="movie_title">{title}</h3>        
          <h5 className="movie_year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres_genre" >{genre}</li>
            ))}
          </ul>
          <p className="movie_summary">{summary.slice(0, 140)}</p>
        </div>
      </div>
    </Link>
  )
};

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired
};


export default Movie;