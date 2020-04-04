import React, { Component } from "react";
import { connect } from "react-redux";
import { movieStat2 } from "../../store/actions/actions";

class MovieStat2 extends Component {
  render() {

    const {
      awards2,
      imdbRating2,
      imdbVotes2,
      metaScore2,
      dollars2
    } = this.props;


    this.props.movieStat2({
      "awards2": awards2,
      "imdbRating2": imdbRating2,
      "imdbVotes2": imdbVotes2,
      "metaScore2": metaScore2,
      "dollars2": dollars2
    });

    return <div></div>;
  }
}

export default connect(null, { movieStat2 })(MovieStat2);
