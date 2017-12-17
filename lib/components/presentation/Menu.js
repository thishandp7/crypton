import React from 'react';
import styleable from 'react-styleable';
import css from './menu.css';

const Menu = (props) => {
  return(
    <div className={props.css.menuBar}>
    </div>
  );
};

export default styleable(css)(Menu);
