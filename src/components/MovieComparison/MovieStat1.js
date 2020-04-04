import React, { Component } from "react";
import { connect } from "react-redux";
import { movieStat1 } from "../../store/actions/actions";

class MovieStat1 extends Component {
  render() {
    const {
      awards1,
      imdbRating1,
      imdbVotes1,
      metaScore1,
      dollars1
    } = this.props;

    this.props.movieStat1({
      "awards": awards1,
      "imdbRating": imdbRating1,
      "imdbVotes": imdbVotes1,
      "metaScore": metaScore1,
      "dollars": dollars1,
    });
    return <div></div>;
  }
}

export default connect(null, { movieStat1 })(MovieStat1);
