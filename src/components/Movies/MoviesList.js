import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

class MoviesList extends Component {  
    render() {
         const { movies } = this.props;
         const movieList = movies.map(mov => (
           <MovieItem selectedItem={this.props.select} movie={mov} key={mov.imdbID} />
         ));
         
        return <div>{movieList}</div>;
    }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesList);
