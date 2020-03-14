import React, { Component } from "react";
import "./MoviesSearch.scss";
import { connect } from "react-redux";
import MovieList from "./MoviesList";

import { movieSearch, fetchMovie } from "../../store/actions/actions";

class MoviesSearch extends Component {
  state = { 
    display: false,
    title: ''
  };

  handleChange = e => {
    this.props.movieSearch(e.target.value);
    this.setState({
      display: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchInput } = this.props;
    this.props.fetchMovie(searchInput);
    this.setState({
      display: true
    });
  };

  handleSelect = () => {
    this.setState({display: false, title: this.props.movies.Title})
    this.props.movieSearch(this.state.title)
  }

  render() {
//////////////////////////////////////////
////STATE:    
    const { movies } = this.props;
//////////////////////////////////////////
//// BUTTONS:    
    const btnDisabled = (
      <button type="submit" disabled>
        Search
      </button>
    );
    const btnEnabled = <button type="submit">Search</button>;
///////////////////////////////////////////
//// DISPLAY CONTENT:    
    const display = (
      <div className="dropdown-content">
        <MovieList select={this.handleSelect}/>
      </div>
    );
///////////////////////////////////////////   
console.log(this.state.title) 
    return (
      <div className="movieSearch">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <div
            className={movies.length === 0 ? "dropdown" : "dropdown is-active"}
          >
            <input
              type="text"
              placeholder="Enter Movie Name"
              onChange={this.handleChange}
            />
            <div className="dropdown-menu">
              {this.state.display ? display : null}
            </div>
            {this.props.searchInput.length <= 0 ? btnDisabled : btnEnabled}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchInput: state.movies.searchInput,
  movies: state.movies.movies
});

export default connect(mapStateToProps, { movieSearch, fetchMovie })(
  MoviesSearch
);
