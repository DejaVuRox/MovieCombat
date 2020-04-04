import React, { Component } from "react";
import { connect } from "react-redux";

import MovieResult from "./MovieResult";

class MovieResultList extends Component {
  render() {
    const { movie1 } = this.props; 
    return (
      <div>
        <MovieResult result={movie1} key={movie1.imdbID} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie1: state.result.movie1
});

export default connect(mapStateToProps)(MovieResultList);
