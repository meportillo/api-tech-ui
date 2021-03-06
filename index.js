import {listaPaises, total, totalPaises} from './mock.js'
import express from 'express';
import cors from 'cors';

var app = express();
app.use(cors());
app.get('/', cors(),function (req, res) {
  res.send('Hello World!');
});
app.get('/countries', cors(), function (req, res) {
    res.send(listaPaises);
  });

app.get('/country/:country', cors(), function (req, res) {
    console.log(req.params.country);
    var list = totalPaises.filter(e => e.valorPais == req.params.country);
    res.send(list.length ==1 ? list[0]:{"error": "not found"});
});

app.get('/world/total', cors(), function (req, res) {
  res.send(total);
});

  
app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!');
});