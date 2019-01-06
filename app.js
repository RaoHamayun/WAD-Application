var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



//Making Object of Routers

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var RoleRouter = require('./routes/Role');
var LoginRouter = require('./routes/login');
var OrderRouter = require('./routes/order');
var MainRouter = require('./routes/main');
var d = require('./routes/d');
var product = require('./routes/product');

var app = express();


// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Router Calling

app.use('/', indexRouter);
app.use('/main',MainRouter)
app.use('/users', usersRouter);
app.use('/Role',RoleRouter);
app.use('/Login',LoginRouter);
app.use('/order',OrderRouter)
app.use('/d',d);
app.use('/product',product)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
