import axios from 'axios';

export default class DataAOI{
  constructor(){
  }

  bittrexTransform = (rawData) =>{
    const data = rawData.result[0];
    const timeStamp = this.generateTime();
    return {
      price: data.Last,
      time: parseInt(timeStamp)
    };
  }

  binanceTransform = (rawData) =>{
    const timeStamp = this.generateTime();
    return {
      price: parseFloat(rawData.lastPrice),
      time: parseInt(timeStamp)
    };
  }

  coinMarketCapTransform = (rawData) =>{
    const timeStamp = this.generateTime();
    const data = rawData[0];
    return {
      price: parseFloat(data.price_btc),
      time: parseInt(timeStamp)
    };
  }

  generateTime = () => {
    const d = new Date();
    //return `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
    return d.getSeconds();
  }

  getData = async (selection, socket) => {
    let data = {};
    let res = {};
    try {
      switch (selection.source) {
        case 'BTRX':
          res = await axios.get(`https://bittrex.com/api/v1.1/public/getmarketsummary?market=${selection.baseCoin}-${selection.coin}`);
          data = this.bittrexTransform(res.data);
          break;
        case 'BINA':
          res = await axios.get(`https://api.binance.com/api/v1/ticker/24hr?symbol=${selection.coin}${selection.baseCoin}`);
          data = this.binanceTransform(res.data);
          break;
        case 'CMKC':
          res = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${selection.coin}/?convert=${selection.baseCoin}`);
          data = this.coinMarketCapTransform(res.data);
          break;
      }
      socket.emit('transformedData', data);
    } catch (e) {
      console.info(e);
    }
  }
}
