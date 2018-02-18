import React from 'react';
import MenuContainer from './MenuContainer';
import CoinListContainer from './CoinListContainer';
import ChartContainer from './ChartContainer';
import CoinInfoContainer from './CoinInfoContainer';
import css from '../styles/primary.css';/* eslint no-unused-vars: 0 */
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { initConnection } from '../actions/initConnection';

class App extends React.Component{
  componentDidMount() {
    this.props.dispatch(initConnection());
  }
  render() {
    return(
      <div>
        <MenuContainer />
        <div className={this.props.css.col8}>
          <ChartContainer />
        </div>
        <div className={this.props.css.col4}>
          <CoinInfoContainer />
        </div>
      </div>
    );
  }
}

export default connect((state, props) => {
  return {};
})(styleable(css)(App));
