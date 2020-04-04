import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

class MoviesList extends Component {
  render() {
    const { movies1 } = this.props;
    const movieList = movies1.map(mov => (
      <MovieItem
        selectedItem={this.props.select}
        getMovie={this.props.movie}
        movie={mov}
        key={mov.imdbID}
      />
    ));

    return <div>{movieList}</div>;
  }
}

const mapStateToProps = state => ({
  movies1: state.result.movies1
});

export default connect(mapStateToProps)(MoviesList);
