const express = require('express');

const app = express();

app.use(require('cors')())
app.use(express.json())

app.set('secret', 'i2u34y12oi3u4y8')
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)   //这里引用，传入实参
require('./router/admin')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000');
  });