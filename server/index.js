require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
dbConfig = require('./config/database.js');
const conn = dbConfig.init();
const indexRouter = require('./routes/index');
const campingRouter = require('./routes/campings');
const userRouter = require('./routes/users');
dbConfig.connect(conn);

app.use(express.json());
//json 형태 데이터 해석
app.use(express.urlencoded({ extended: false }));
//x-www-form-urlencoded 형태 데이터 해석
//참고자료 https://kirkim.github.io/javascript/2021/10/16/body_parser.html

app.use(
  cors({
    origin: [
      'http://localhost:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
  }),
);

app.use('/',indexRouter)
app.use('/camping', campingRouter)
app.use('/user', userRouter)

const PORT = process.env.DATABASE_PORT || 4002;

app.listen(PORT, () => console.log(PORT + '포트로 서버 시작'));