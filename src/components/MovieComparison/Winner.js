import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Winner.scss'

class Winner extends Component {
    render() {
        const { totalScore1, totalScore2 } = this.props;

        const poster1 = this.props.movie1.Poster
        const title1 = this.props.movie1.Title

        const poster2 = this.props.movie2.Poster
        const title2 = this.props.movie2.Title

        return (
          <div className="winnerSelected">
            <div className="winPoster">
              <img
              className='MovWinPoster'
                src={totalScore1 >= totalScore2 ? poster1 : poster2}
                alt=""
              />
            </div>
            <p className="absWinner">The Absolute Winner is </p>
            <p className="absTitle">
              {totalScore1 >= totalScore2 ? title1 : title2}
            </p>
          </div>
        );
    }
}

const mapStateToProps = state => ({
  movie1: state.result.movie1,
  movie2: state.result.movie2,
  totalScore1: state.result.totalScore1,
  totalScore2: state.result.totalScore2
});

export default connect(mapStateToProps) (Winner)
