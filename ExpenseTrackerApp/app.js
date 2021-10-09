const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/config.env'});

const transactions = require('./routes/transaction-routes');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}

app.use('/api/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold));