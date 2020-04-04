import React, { Component } from "react";
import { connect } from "react-redux";
import { totalScore1, totalScore2 } from "../../store/actions/actions";
import "./MovieComparison.scss";

class MovieComparison extends Component {
  handleCompare = () => {
    const { movie1Stat, movie2Stat } = this.props;
    const { metaScore, imdbRating, awards, dollars, imdbVotes } = movie1Stat;

    const {
      metaScore2,
      imdbRating2,
      awards2,
      dollars2,
      imdbVotes2
    } = movie2Stat;

    const totalMov1 = metaScore + imdbRating + awards + dollars + imdbVotes;

    const totalMov2 =
      metaScore2 + imdbRating2 + awards2 + dollars2 + imdbVotes2;

    const { totalScore1, totalScore2 } = this.props;

    totalScore1(totalMov1);
    totalScore2(totalMov2);
  };

  render() {
    const { disMovie1, disMovie2 } = this.props;

    return (
      <div>
        <button
          className={disMovie1 && disMovie2 ? "btn-win" : "btn-hide"}
          onClick={this.handleCompare}
        >
          total winner
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie1Stat: state.result.movie1Stat,
  movie2Stat: state.result.movie2Stat,
  totalScore1: state.result.totalScore1,
  totalScore2: state.result.totalScore2,
  disMovie1: state.result.disMovie1,
  disMovie2: state.result.disMovie2
});

export default connect(mapStateToProps, { totalScore1, totalScore2 })(
  MovieComparison
);
