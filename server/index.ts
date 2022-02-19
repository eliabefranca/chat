import express from 'express';
import './websocket';

const app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/static', express.static('./static'));

app.listen(3000);
