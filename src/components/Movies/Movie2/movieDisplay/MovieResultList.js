import React, { Component } from "react";
import { connect } from "react-redux";
import MovieResult from "./MovieResult";

class MovieResultList extends Component {
  render() {
    const { movie2 } = this.props; 
    return (
      <div>
        <MovieResult result={movie2} key={movie2.imdbID} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie2: state.result.movie2
});

export default connect(mapStateToProps)(MovieResultList);
