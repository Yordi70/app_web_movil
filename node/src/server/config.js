const path = require('path');

const exphbs = require('express-handlebars');
const morgan = require('morgan');
const express = require('express');
const routes = require('../routes/index');
const errorHandler = require('errorhandler');
const axios = require('axios');
let cors = require("cors");

module.exports = app => {

    //settings
    app.set('port', process.env.PORT || 3000);
    //views
    app.set('views', path.join(__dirname, '../views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoustsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }))
    app.set('view engine', '.hbs');

    //middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    //routes
    routes(app);
    app.get("/list", cors(), (req, res) => {

    });
    //static files
    app.use('/public', express.static(path.join(__dirname, '../public')));

    //errorhandlers
    if ('development' === app.get('env')) {
        app.use(errorHandler);
    }

    return app;
}