const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.status(404).send({
      error: 'page not found',
      name: 'TODO app v1.0'
   });
});

app.get('/users', (req, res) => {
   res.send([
      {name: 'Mahmoud', age: 26},
      {name: "Mohamed", age: 27},
      {name: "Ibrahim", age: 30}
   ])
});


app.listen(3000);
module.exports.app = app;