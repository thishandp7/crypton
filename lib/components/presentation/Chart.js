import React from 'react';
import styleable from 'react-styleable';
import css from './chart.css';

const Chart = (props) => {
  return(
    <div className={props.css.chartBody}>
    </div>
  );
};

export default styleable(css)(Chart);
