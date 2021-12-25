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

//handle prod

if(process.env.NODE_EVN === 'production'){
  //static folder
  app.use(express.static(__dirname + '/public'));

  //handle application 
  app.get(/.*/,(req,res)=> res.sendFile(__dirname +'/public/index.html'));
}

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
