const express = require("express");
require('dotenv').config();
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan')
const notFoundHandler = require('./middlewares/notFound');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(routes);
app.use(notFoundHandler);

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));
