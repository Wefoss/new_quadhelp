const http = require('http');
const express = require('express');
const cors = require('cors');
require('./dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');
const logger = require('./loggerErrors')

const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(( err, req, res, next) => {
  const {stack} = err
        logger.error({message: err.message,  code: err.code, stackTrace: {stack}})
      next(err)
  })
  app.use(handlerError);




const server = http.createServer(app);
server.listen(PORT,
  () => console.log(`Example app listening on port ${ PORT }!`));
controller.createConnection(server);


