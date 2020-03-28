import React, { Component } from "react";
import "./MoviesSearch.scss";
import { connect } from "react-redux";
import MovieList from "./MoviesList";

import {
  movieSearch,
  fetchMovie,
  option1
} from "../../store/actions/actions";

class MoviesSearch extends Component {
  state = {
    display: false,
    title: "",
    openDrop: "dropdown is-active",
    closeDrop: "dropdown"
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

  handleSelect = value => {
    this.setState({ title: value });
    this.props.movieSearch(value);
  };

  handleMovie = e => {
    this.props.option1(e);
  };

  render() {
    const { movies } = this.props;
    const btnDisabled = (
      <button type="submit" disabled>
        Search
      </button>
    );
    const btnEnabled = <button type="submit">Search</button>;
    const display = (
      <div className="dropdown-content">
        <MovieList select={this.handleSelect} movie={this.handleMovie} />
      </div>
    );

    console.log(this.state.title);
    return (
      <div className="movieSearch">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <div
            className={
              movies.length === 0 ? this.state.closeDrop : this.state.openDrop
            }
          >
            <input
              type="text"
              placeholder="Enter Movie Name"
              onChange={this.handleChange}
              value={
                this.state.title <= 0
                  ? this.props.searchInput
                  : this.state.title
              }
            />
            <div className="dropdown-menu">
              {this.state.display ? display : null}
            </div>
            {this.props.searchInput.length <= 0 || this.state.title.length < 0
              ? btnDisabled
              : btnEnabled}
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

export default connect(mapStateToProps, {
  movieSearch,
  fetchMovie,
  option1
})(MoviesSearch);
