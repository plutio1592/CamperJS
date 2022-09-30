const cors = require('cors');
const express = require('express');
//const app = express();
// const campingRouter = require('./controllers/camperDB/campings');
// const userRouter = require('./controllers/camperDB/users');
// const imageUrlRouter = require('./controllers/camperDB/campingImageUrl')
// const campingRouter = require('./routes/campings');
// const userRouter = require('./routes/userSignUp');
// const imageUrlRouter = require('./routes/campingImageUrl')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
require('dotenv').config();
dbConfig = require('./config/database.js');
const conn = dbConfig.init();
dbConfig.connect(conn);

const campingRouter = require('./routes/campings');
const imageUrlRouter = require('./routes/campingImageUrl')
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
        secure: false,
      },
  }))

  passportConfig()
app.use(passport.initialize())
app.use(passport.session())

app.use('/camping', campingRouter)
app.use('/imageurl', imageUrlRouter)

// app.use(cookieParser(process.env.COOKIE_SECRET))
// app.use(session({
//   saveUninitialized: false,
//   resave: false,
//   secret: process.env.COOKIE_SECRET,
// }))
// app.use(passport.initialize())
// app.use(passport.session())
app.use('/auth', authRouter)

const PORT = process.env.DATABASE_PORT || 4002;
app.listen(PORT, () => console.log(PORT + '포트로 서버 시작'));