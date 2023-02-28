const express = require('express');
const cors = require('cors');
const bookRouter = require("../router/book.router");
const userRouter = require("../router/user.router");

const app = express();

app.get('/', (req, res) => {
    res.send('Conectado al servidor');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user/v1", userRouter);
app.use("/book/v1", bookRouter);

module.exports = app;