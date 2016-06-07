var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World, whats rockin?');
});


app.get('/getfib4', function (req, res) {
  var x1=1, x2=1, fib=1;

  for(i=1; i<4; i++) {
    fib = x1 + x2;
    x1 = x2;
    x2 = fib;
  }

  res.send('the fourth position in the fibonacci series is: ' + fib);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});