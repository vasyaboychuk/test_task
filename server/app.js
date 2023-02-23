const express = require('express');
require('dotenv').config();
const sequelize = require('./dataBase/db');
const models = require('./dataBase/index');
const osRouter = require('./router/os.router');
const userRouter = require('./router/user.router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT=process.env.PORT||5000;

app.use('/api/v1/health', osRouter);
app.use('/api/v1/auth', userRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'unknown error',
    status: err.status || 500,

  });
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`server listen port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
