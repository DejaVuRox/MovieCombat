import React, { Component } from "react";
import "./MoviesSearch.scss";
import { connect } from "react-redux";
import MovieList from "./MoviesList";

import svg from '../../../assets/icons/search/sprite.svg'

import {
  movieSearch1,
  fetchMovie1,
  option1,
  title
} from "../../../store/actions/actions";

class MoviesSearch extends Component {
  state = {
    display: false,
  };

  handleChange = e => {
    this.props.movieSearch1(e.target.value);
    this.setState({
      display: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchInput1 } = this.props;
    this.props.fetchMovie1(searchInput1);
    this.setState({
      display: true
    });
  };

  handleSelect = value => {
    this.props.title(value)
    this.props.movieSearch1(value);
  };

  handleMovie = e => {
    this.props.option1(e);
  };

  render() {
    const btnDisabled = (
      <button className="btn-disabled" type="submit" disabled>
        <svg className="icon-disabled">
          <use xlinkHref={`${svg}#icon-search`} />
        </svg>
      </button>
    );
    const btnEnabled = (
      <button className="btn-enabled" type="submit">
        <svg className="icon-enabled">
          <use xlinkHref={`${svg}#icon-search`} />
        </svg>
      </button>
    );
    const display = (
      <div className="myContent">
         <MovieList select={this.handleSelect} movie={this.handleMovie} /> 
      </div>
    );

    return (
      <div className="movieSearch">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <div className={this.props.openDrop}>
            <div className="main">
              <div>
                <input
                  type="text"
                  placeholder="Search Movie..."
                  onChange={this.handleChange}
                  className="inputMovie"
                  value={
                    this.props.title !== ""
                      ? this.props.searchInput1
                      : this.props.title
                  }
                />
              </div>

              <div className="dropdown-menu">
                {this.state.display ? display : null}
              </div>

              <div>
                {this.props.searchInput1.length <= 0 ||
                this.props.title.length < 0
                  ? btnDisabled
                  : btnEnabled}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchInput1: state.search.searchInput1,
  title: state.search.title,
  display: state.search.display,
  openDrop: state.search.openDrop,
  movies1: state.result.movies1,
  error: state.search.error
});

export default connect(mapStateToProps, {
  movieSearch1,
  fetchMovie1,
  option1,
  title
})(MoviesSearch);
