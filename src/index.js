const express = require("express");
require('dotenv').config();
const routes = require('./routes');
const app = express();


const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));
