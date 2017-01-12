const express = require('express');

const app = express();

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Paul',
    likes: [
      'Coding',
      'Westie'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'unable to handle request'
  });
});

app.listen(3000);
