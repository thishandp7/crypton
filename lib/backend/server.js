import express from 'express';
import config from '../config';
import http from 'http';
import io from 'socket.io';
import parser from 'body-parser';
import DataAPI from './DataAPI';

const app = express();
const server = http.createServer(app);
const socket = io(server);
const dataAPI = new DataAPI();

app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index', {});
});

let selection = {
  source: 'BTRX',
  baseCoin: 'BTC',
  coin: 'XRP'
};

let interval;

socket.on('connection', (socket) => {
  console.info('client connected');

  if(interval){
    clearTimeout(interval);
  }
  interval = setInterval(() => dataAPI.getData(selection, socket), 1000);
});


server.listen(config.port, () => {
  console.info(`Running on port: ${config.port}`);
});
