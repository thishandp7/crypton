import React from 'react';
import styleable from 'react-styleable';
import css from './coinList.css';

const CoinList = (props) => {
  return(
    <div className={props.css.coinListMain}>
      <div className={props.css.coinListHead}>
        <div className={props.css.coin}>COIN</div>
        <div className={props.css.name}>NAME</div>
        <div className={props.css.volume}>VOLUME</div>
        <div className={props.css.price}>PRICE</div>
        <div className={props.css.change}>CHANGE</div>
      </div>
      <div className={props.css.coinListBody}>
        {
          props.data.map((item, index) => {
            return <div className={props.css.coinItem} key={index}>
              <div className={props.css.coin}><b>{item.MarketName}</b></div>
              <div className={props.css.name}>LTC</div>
              <div className={props.css.volume}>{item.Volume}</div>
              <div className={props.css.price}>{item.Last}</div>
              <div className={props.css.change}>00</div>
            </div>;
          })
        }
      </div>
    </div>
  );
};

export default styleable(css)(CoinList);
