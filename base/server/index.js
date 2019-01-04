const express = require('express');
const errors = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash-notification');
const session = require('express-session');

const app = express();

// Settings
const { db } = require('./database');
const flashNotificationOptions = {
    beforeSingleRender: function(item, callback) {
        if (item.type) {
            switch(item.type) {
                case 'GOOD':
                item.type = 'Hecho';
                item.alertClass = 'alert-success';
                break;
                case 'OK':
                item.type = 'Info';
                item.alertClass = 'alert-info';
                break;
                case 'BAD':
                item.type = 'Error';
                item.alertClass = 'alert-danger';
                break;
            }
        }
        callback(null, item);
    }
};

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(session({
    name: 'medicapp',
    secret: 'shuush',
    resave: false,
    saveUninitialized: false
}));

app.use(flash(app, flashNotificationOptions));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../ui/public')));

// Routes
app.use('/api/rol', require('./routes/rol.routes'));
app.use('/api/persona', require('./routes/persona.routes'));
app.use('/api/cuenta', require('./routes/cuenta.routes'));
app.use('/api/articulo', require('./routes/articulo.routes'));
app.use('/api/pedido', require('./routes/pedido.routes'));
app.use('/api/transaccion', require('./routes/transaccion.routes'));
app.use('/api/pago', require('./routes/pago.routes'));
app.use('/api/categoria', require('./routes/categoria.routes'));

// View engine set-up
app.set('views', path.join(__dirname, '../ui/views'));
app.set('view engine', 'ejs');

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(errors(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
  
module.exports = app;