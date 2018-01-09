import React from 'react';
import CoinList from '../presentation/CoinList';
import testListData from '../../testData/testListData.js';

class CoinListContainer extends React.Component{
  render(){
    var data = testListData.market;
    return(
      <div>
        <CoinList data={data}/>
      </div>
    );
  }
}

export default CoinListContainer;
