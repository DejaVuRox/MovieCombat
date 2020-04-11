import React, { Component } from "react";
import "./MoviesSearch.scss";
import { connect } from "react-redux";
import MovieList from "./MoviesList";

import svg from "../../../assets/icons/search/sprite.svg";

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
                      ? this.props.searchInput2
                      : this.props.title
                  }
                />
              </div>

              <div className="dropdown-menu">
                {this.state.display ? display : null}
              </div>

              <div>
                {this.props.searchInput2.length <= 0 ||
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
