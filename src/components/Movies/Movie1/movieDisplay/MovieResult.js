import React, { Component } from "react";
import "./MovieResult.scss";
import { connect } from "react-redux";
import MovieStat1 from "../../../MovieComparison/MovieStat1";

class MovieResult extends Component {
  render() {
    const { result } = this.props;
    const { movie1Stat, movie2Stat } = this.props;
    const { totalScore1, totalScore2 } = this.props;
    
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


    //"movieDisWin" : "movieDis"
    return (
      <div className="movieDis">
        <div className="stat">
          <MovieStat1
            awards1={awards}
            imdbRating1={imdbRating}
            imdbVotes1={imdbVotes}
            metaScore1={metaScore}
            dollars1={dollars}
          />
        </div>

        <div className="basic-info">
          <img src={result.Poster} alt="" className="movPoster" />
          <h1 className="movTitle">{result.Title}</h1>
          <p className="movGenre">{result.Genre}</p>
          <p className="movPlot">{result.Plot}</p>
        </div>

        <div className="info">
          <article
            data-value={awards}
            className={
              movie1Stat.awards > movie2Stat.awards2
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
              movie1Stat.dollars > movie2Stat.dollars2
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
              movie1Stat.metaScore > movie2Stat.metaScore2
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
              movie1Stat.imdbRating > movie2Stat.imdbRating2
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
              movie1Stat.imdbVotes > movie2Stat.imdbVotes2
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
  movie2Stat: state.result.movie2Stat,
  totalScore1: state.result.totalScore1,
  totalScore2: state.result.totalScore2,
});

export default connect(mapStateToProps)(MovieResult);
