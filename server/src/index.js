const http = require('http');
const fs = require('fs')
const express = require('express');
const cors = require('cors');
require('./dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');
const {addLogToFile, logTimeout} = require('./loggerErrors')




const PORT = process.env.PORT || 3000;
const app = express();

logTimeout()
app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);
app.use(( err, req, res, next) => {
  const {stack, message, code} = err
     addLogToFile({message, stack, code})
      next(err)
    })
 

  
  

const server = http.createServer(app);
server.listen(PORT,
  () => console.log(`Example app listening on port ${ PORT }!`));
controller.createConnection(server);

