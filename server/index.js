const fs = require('fs')
const https = require('https')
const cors = require('cors');
const express = require('express');
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
require('dotenv').config();
dbConfig = require('./config/database.js');
const conn = dbConfig.init();
dbConfig.connect(conn);

const campingRouter = require('./routes/campings');
// const imageUrlRouter = require('./routes/campingImageUrl')
const passportConfig = require('./routes/passport')
const authRouter = require('./routes/auth')

const app = express();

app.use(express.json());
//json 형태 데이터 해석
app.use(express.urlencoded({ extended: true }));
//x-www-form-urlencoded 형태 데이터 해석
//참고자료 https://kirkim.github.io/javascript/2021/10/16/body_parser.html

app.use(
  cors({
    origin: [
      'https://localhost:3000',
      'http://localhost:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH', 'DELETE'],
  }),
  );
  
  app.use(cookieParser(process.env.COOKIE_SECRET))
  app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true, //http만 사용
        secure: true, //true: https ON, false: https OFF
      },
  }))

  passportConfig()
app.use(passport.initialize())
app.use(passport.session())

app.use('/camping', campingRouter)
// app.use('/imageurl', imageUrlRouter)
app.use('/auth', authRouter)

const HTTPS_PORT = process.env.DATABASE_PORT || 4002

let server;
//인증키 파일이 존재할 경우 https로 실행
//인증키 파일이 존재하지 않을 경우 http로 실행
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
}
module.exports = server;

// const PORT = process.env.DATABASE_PORT || 4002;
// app.listen(PORT, () => console.log(PORT + '포트로 서버 시작'));