import React from 'react';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    Statistics
    <div>good :{good}</div>
    <div>neutral :{neutral}</div>
    <div>bad :{bad}</div>
    <div>total : {total}</div>
    <div>positive feedback :{positivePercentage} %</div>
  </div>
);

export default Statistics;
