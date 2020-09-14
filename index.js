const express = require('express');
const passport = require('passport');

const keys = require('./config/keys');
require('./services/passport');



const app = express();

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
