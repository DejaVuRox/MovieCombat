import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import './MoviesList.scss'

class MoviesList extends Component {
  render() {
    const { movies1 } = this.props;

    return (
      <div>
        {!movies1 ? (
          <span className='notFound'>Movie Not Found</span>
        ) : (
          movies1.map((mov) => (
            <MovieItem
              selectedItem={this.props.select}
              getMovie={this.props.movie}
              movie={mov}
              key={mov.imdbID}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies1: state.result.movies1,
});

export default connect(mapStateToProps)(MoviesList);
