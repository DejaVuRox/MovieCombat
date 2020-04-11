import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

class MoviesList extends Component {
  render() {
    const { movies2 } = this.props;

    return (
      <div>
        {!movies2 ? (
          <span className="notFound">Movie Not Found</span>
        ) : (
          movies2.map((mov) => (
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
  movies2: state.result.movies2,
});

export default connect(mapStateToProps)(MoviesList);
