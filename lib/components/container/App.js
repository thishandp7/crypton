import React from 'react';
import MenuContainer from './MenuContainer';
import CoinListContainer from './CoinListContainer';
import ChartContainer from './ChartContainer';
import CoinInfoContainer from './CoinInfoContainer';
import css from '../styles/primary.css';/* eslint no-unused-vars: 0 */
import styleable from 'react-styleable';

class App extends React.Component{
  render() {
    return(
      <div>
        <MenuContainer />
        <div className={this.props.css.col3}>
          <CoinListContainer />
        </div>
        <div className={this.props.css.col7}>
        </div>
        <div className={this.props.css.col2}>
          <CoinInfoContainer />
        </div>
      </div>
    );
  }
}

export default styleable(css)(App);
