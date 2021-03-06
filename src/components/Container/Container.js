import React, { Component } from "react";
import { connect } from "react-redux";
import './Container.scss'

import MovieSearch1 from "../Movies/Movie1/MoviesSearch";
import MovieSearch2 from "../Movies/Movie2/MoviesSearch";
import MovieResultList1 from "../Movies/Movie1/movieDisplay/MovieResultList";
import MovieResultList2 from "../Movies/Movie2/movieDisplay/MovieResultList";
import MovieComparison from '../MovieComparison/MovieComparison'
class Container extends Component {
  render() {
      const { disMovie1, disMovie2, winner } = this.props;
      
    return (
      <div className="container">
        <div className="movVS">
          <div className={winner ? "mov1" : ""}>
            <MovieSearch1 />
            {!disMovie1 ? null : <MovieResultList1 />}
          </div>
          <div className={winner ? "mov2" : ""}>
            <MovieSearch2 />
            {!disMovie2 ? null : <MovieResultList2 />}
          </div>
        </div>

        <div className="compare">
          <MovieComparison />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  disMovie1: state.result.disMovie1,
  disMovie2: state.result.disMovie2,
  winner: state.result.winner
});

export default connect(mapStateToProps)(Container);
