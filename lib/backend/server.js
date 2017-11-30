import express from 'express';
import config from '../config';
const app = express();

app.use(express.static('public'));
app.listen(config.port, () => {
  console.info(`Running on port: ${config.port}`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { data: 45 });
});
