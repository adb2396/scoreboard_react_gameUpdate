import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, score, changeScore }) => {

    return (
    <div className="counter">
        <button onClick={() => changeScore(index ,-1)} className="counter-action decrement"> - </button>
        <span className="counter-score">{ score }</span>
        <button onClick={() => changeScore(index, 1)} className="counter-action increment"> + </button>
    </div>
    );
  }

Counter.PropTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func
};

export default Counter;