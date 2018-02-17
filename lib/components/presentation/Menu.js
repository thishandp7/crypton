import React from 'react';
import styleable from 'react-styleable';
import css from './menu.css';

const Menu = (props) => {
  return(
    <div className={props.css.menuBar}>
      <h1 className={props.css.cryptonLogo}>crypton</h1>
    </div>
  );
};

export default styleable(css)(Menu);
