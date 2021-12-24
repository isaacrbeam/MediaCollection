const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//middleware
//
app.use(bodyParser.json());
app.use(cors());


const posts = require('./routes/api/posts');
const port = process.env.PORT || 3000;

app.use('/api/posts', posts);

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
