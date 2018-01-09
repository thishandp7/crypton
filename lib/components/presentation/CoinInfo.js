import React from 'react';
import styleable from 'react-styleable';
import css from './coinInfo.css';

const CoinInfo = (props) => {
  return(
    <div className={props.css.coinInfoBody}>
      <div className={props.css.coinLogo}>
        Litcoin
      </div>
      <div>
      </div>
      <div className={props.css.lastPrice}>
        <div>
          Last
        </div>
        <div>
          235.25
        </div>
      </div>
      <div className={props.css.coinVolume}>
        <div>
          Volume
        </div>
        <div>
          0.01670970
        </div>
      </div>
      <div className={props.css.bid}>
        <div>
          Bid
        </div>
        <div>
          235.00
        </div>
      </div>
      <div className={props.css.ask}>
        <div>
          Ask
        </div>
        <div>
          235.00
        </div>
      </div>
      <div className={props.css.high}>
        <div>
          24 high
        </div>
        <div>
          240.00
        </div>
      </div>
      <div className={props.css.low}>
        <div>
          24 low
        </div>
        <div>
          240.00
        </div>
      </div>
    </div>
  );
};

export default styleable(css)(CoinInfo);
