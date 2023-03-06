const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const customerRouter = require('./route/customer');
const userRouter = require('./route/user');

dotenv.config({path: "./config/.env"});
const port = process.env.PORT;
const monmgoUrl = process.env.mongo_url;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', customerRouter);
app.use('/api', userRouter);

app.listen(port, ()=>{ console.log(`http://localhost:${port} in run.`); });