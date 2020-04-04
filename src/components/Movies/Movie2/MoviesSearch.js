import React, { Component } from "react";
import "./MoviesSearch.scss";
import { connect } from "react-redux";
import MovieList from "./MoviesList";

import {
  movieSearch2,
  fetchMovie2,
  option2,
  title
} from "../../../store/actions/actions";

class MoviesSearch extends Component {
  state = {
    display: false,
    title: "",
  };

  handleChange = e => {
    this.props.movieSearch2(e.target.value);
    this.setState({
      display: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchInput2 } = this.props;
    this.props.fetchMovie2(searchInput2);
    this.setState({
      display: true
    });
  };

  handleSelect = value => {
    this.props.title(value)
    this.props.movieSearch2(value);
  };

  handleMovie = e => {
    this.props.option2(e);
  };

  render() {
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

    return (
      <div className="movieSearch">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <div className={this.props.openDrop}>
            <input
              type="text"
              placeholder="Enter Movie Name"
              onChange={this.handleChange}
              value={
                this.props.title !== ''
                  ? this.props.searchInput2
                  : this.props.title
              }
            />
            <div className="dropdown-menu">
              {this.state.display ? display : null}
            </div>
            {this.props.searchInput2.length <= 0 || this.props.title.length < 0
              ? btnDisabled
              : btnEnabled}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchInput2: state.search.searchInput2,
  title: state.search.title,
  display: state.search.display,
  openDrop: state.search.openDrop,
  movies2: state.result.movies2
});

export default connect(mapStateToProps, {
  movieSearch2,
  fetchMovie2,
  option2,
  title
})(MoviesSearch);
