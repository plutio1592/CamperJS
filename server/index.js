require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../models');
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

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '열림')
})

module.exports = (app) => {
  app.use(passport.initialize()); 
  passport.use(
      new KakaoStrategy({
          clientID: process.env.KAKAO_CLIENT_ID, 
          callbackURL: process.env.KAKAO_URL
      },
      async (accessToken, refreshToken, profile, done) => {
          try {
              const exUser = await User.findOne({
                  
                  where: { snsId: profile.id},
              });
              
              if (exUser) {
                  done(null, exUser); 
              } else {
                  
                  const newUser = await User.create({
                      email: profile._json && profile._json.kakao_account_email,
                      nickname: profile.displayName,
                      snsId: profile.id,
                      providerType: 'kakao',
                  });
                  done(null, newUser); 
              }
          } catch (error) {
              console.error(error);
              done(error);
          }
      },
      ),
  );
  passport.serializeUser((user,done)=>{ 
      done(null,user);
  });
  passport.deserializeUser((user,done)=>{
      done(null,user);
  });
};
app.listen(PORT, () => console.log(PORT + '포트로 서버 시작'));
