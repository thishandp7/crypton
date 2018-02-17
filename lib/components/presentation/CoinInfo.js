import React from 'react';
import styleable from 'react-styleable';
import css from './coinInfo.css';

const CoinInfo = (props) => {
  return(
    <div className={props.css.coinInfoBody}>
    </div>
  );
};

export default styleable(css)(CoinInfo);
