import React, { Component } from "react";
import "./MovieResult.scss";
import { connect } from "react-redux";

import MovieStat2 from "../../../MovieComparison/MovieStat2";

class MovieResult extends Component {
  render() {
    const { result } = this.props;
    const { movie1Stat, movie2Stat } = this.props;

    const dollars = parseInt(
      result.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
    );
    const metaScore = parseInt(result.Metascore);
    const imdbRating = parseFloat(result.imdbRating);
    const imdbVotes = parseInt(result.imdbVotes.replace(/,/g, ""));

    const awards = result.Awards.split(" ").reduce((prev, word) => {
      const value = parseInt(word);
      if (isNaN(value)) {
        return prev;
      } else {
        return prev + value;
      }
    }, 0);

    return (
      <div className="movieDis">
        <div className="stat">
          <MovieStat2
            awards2={awards}
            imdbRating2={imdbRating}
            imdbVotes2={imdbVotes}
            metaScore2={metaScore}
            dollars2={dollars}
          />
        </div>

        <article className="basic-info">
          <img src={result.Poster} alt="" className="movPoster" />
          <h1 className="movTitle">{result.Title}</h1>
          <p className="movGenre">{result.Genre}</p>
          <p className="movPlot">{result.Plot}</p>
        </article>

        <div className="info">
          <article
            data-value={awards}
            className={
              movie1Stat.awards < movie2Stat.awards2
                ? "notification is-warning"
                : "notification is-primary"
            }
          >
            <p className="subtitle">Awards</p>
            <p className="title">{result.Awards}</p>
          </article>

          <article
            data-value={dollars}
            className={
              movie1Stat.dollars < movie2Stat.dollars2
                ? "notification is-warning"
                : "notification is-primary"
            }
          >
            <p className="subtitle">BoxOffice</p>
            <p className="title">{result.BoxOffice}</p>
          </article>

          <article
            data-value={metaScore}
            className={
              movie1Stat.metaScore < movie2Stat.metaScore2
                ? "notification is-warning"
                : "notification is-primary"
            }
          >
            <p className="subtitle">Metascore</p>
            <p className="title">{result.Metascore}</p>
          </article>

          <article
            data-value={imdbRating}
            className={
              movie1Stat.imdbRating < movie2Stat.imdbRating2
                ? "notification is-warning"
                : "notification is-primary"
            }
          >
            <p className="subtitle">IMDB Rating</p>
            <p className="title">{result.imdbRating}</p>
          </article>

          <article
            data-value={imdbVotes}
            className={
              movie1Stat.imdbVotes < movie2Stat.imdbVotes2
                ? "notification is-warning"
                : "notification is-primary"
            }
          >
            <p className="subtitle">IMDB Votes</p>
            <p className="title">{result.imdbVotes}</p>
          </article>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie1Stat: state.result.movie1Stat,
  movie2Stat: state.result.movie2Stat
});

export default connect(mapStateToProps)(MovieResult);
