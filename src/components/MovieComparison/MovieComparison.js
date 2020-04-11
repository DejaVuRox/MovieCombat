import React, { Component } from "react";
import { connect } from "react-redux";
import {
  totalScore1,
  totalScore2,
  winnerDis
} from "../../store/actions/actions";
import "./MovieComparison.scss";
import Winner from './Winner'
class MovieComparison extends Component {
  handleCompare = () => {
    const { movie1Stat, movie2Stat, winnerDis } = this.props;
    const { metaScore, imdbRating, awards, dollars, imdbVotes } = movie1Stat;
    const {
      metaScore2,
      imdbRating2,
      awards2,
      dollars2,
      imdbVotes2
    } = movie2Stat;
    const totalMov1 = [metaScore, imdbRating, awards, dollars, imdbVotes];
    const totalMov2 = [metaScore2, imdbRating2, awards2, dollars2, imdbVotes2];
    const { totalScore1, totalScore2 } = this.props;

    //filters out NaN and accumulates the sum
    totalScore1(
      totalMov1.filter(num => num).reduce((acc, val) => acc + val, 0)
    );
    totalScore2(
      totalMov2.filter(num => num).reduce((acc, val) => acc + val, 0)
    );
    winnerDis();
  };

  render() {
    const { disMovie1, disMovie2, winner} = this.props;
    return (
      <div className="winContainer">
        <button
          className={disMovie1 && disMovie2 ? "btn-win" : "btn-hide"}
          onClick={this.handleCompare}
        >
          {!winner ? "absolute winner" : "search again"}
        </button>
        <div className={winner ? "winner" : "winnerHide"}>
      <Winner />
        </div>
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
  disMovie2: state.result.disMovie2,
  winner: state.result.winner
});

export default connect(mapStateToProps, {
  totalScore1,
  totalScore2,
  winnerDis
})(MovieComparison);
