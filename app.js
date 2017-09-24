'use strict';

var app = require('connect')();
var http = require('http');
var swaggerTools = require('swagger-tools');

var port = 3000;

var options = {
  controllers: './controllers'
};

var swaggerDoc = require('./swagger.json');

swaggerTools.initializeMiddleware(swaggerDoc, middleware => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());

    http.createServer(app).listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
