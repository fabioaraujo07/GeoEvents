var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors')
const moment = require('moment');

var indexRouter = require('./routes/dashboard');
var localsRouter = require('./routes/locals')
var localTypesRouter = require('./routes/localTypes')
var eventsRouter = require('./routes/events')
var eventTypesRouter = require('./routes/eventTypes')
var ticketsRouter = require('./routes/tickets')
var usersRouter = require('./routes/users')
var userRolesRouter = require('./routes/userRoles')
var salesRouter = require('./routes/sales')
var authRouter = require('./routes/auth')
var restApiRouter = require('./routes/REST')


var app = express();

const dbLink = 'mongodb+srv://klotz12:b7T3NggCuKZZVKoW@db.1aprirv.mongodb.net/DB?retryWrites=true&w=majority';

mongoose.connect(dbLink, {useNewUrlParser : true, useUnifiedTopology : true})
.then((result) => console.log("Conected to DB!"))
.catch((err) => console.log(err))

app.locals.moment = moment
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin/locals', localsRouter)
app.use('/admin/local-types', localTypesRouter)
app.use('/admin/events', eventsRouter)
app.use('/admin/event-types', eventTypesRouter)
app.use('/admin/tickets', ticketsRouter)
app.use('/admin/users', usersRouter)
app.use('/admin/user-roles', userRolesRouter)
app.use('/admin/sales', salesRouter)
app.use('/auth', authRouter)
app.use('/api/v1', restApiRouter)

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
