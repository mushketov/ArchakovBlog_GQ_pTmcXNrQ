import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello MAT!');
});


app.use(express.json());

app.post('/auth/login', (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
  });
});


app.listen(4444, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log('server is online http://localhost:4444/');
});