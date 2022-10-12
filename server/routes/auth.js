const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const session = require('express-session')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const {user} = require('../models')

const router = express.Router()

//로컬 회원가입
router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  // const { username, password, name, email, phone } = req.body;

  try {
    // const searchDuplicateId = await user.findOne({
    //   where: {
    //     username: req.body.username,
    //   }
    // })
    // if (searchDuplicateId) {
    //   return res.status(403).send('이미 사용중인 계정입니다.')
    // }


    const searchDuplicateEmail = await user.findOne({
      where: {
        email: req.body.email,
      }
    })
    if (searchDuplicateEmail) {
      return res.status(200).send('이미 사용중인 이메일입니다.')
      // return res.redirect('/join?error=exist')
    }

    // const searchDuplicatePhone = await user.findOne({
    //   where: {
    //     email: req.body.Phone,
    //   }
    // })
    // if (searchDuplicatePhone) {
    //   return res.status(403).send('이미 사용중인 번호입니다.')
    // }

    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    await user.create({
      username: req.body.username,
      password: hashedPassword,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      phoneChk: "0",
      loginType: "local",
    })
    res.status(201).send("회원가입 완료")

  } catch (err) {
    console.error(err)
    return next(err)
  }
})

//로컬 로그인
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local',(err, users, info) => {
    if (err) {
      console.error(err)
      return next(err)
    }
    if (info) {
      return res.status(401).send(info.reason)
    }
    return req.login(users, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr)
        return next(loginErr)
      }
      return res.status(200).json(JSON.stringify(users))
    })
  })(req, res, next)
 
})

//로그아웃
router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
  });
});

//로그인유지 (미확인)
router.get('/', async (req, res, next) => {
  try {
    if (req.users) {
    const users = await user.findOne({
      where: {id: req.users.id},
    })

    return res.status(200).json(users)
    // console.log(req.users.id)
} else {
  return res.status(200).json(null)
}}
catch (err) {
  console.error(err)
  return next(err)
}})

//회원탈퇴 (미완성)
router.delete('/delete', async (req, res, next) => {
  console.log('나와라 세션아이디', req.session.username)
  user.destroy({
    where: {
      username: req.body.username,
    },
  })
  .then(() => {
    req.body.destroy((err) => {
      if (err) {
        res.status(400).send('you are currently not logined');
      } else {
        res.status(200).send('회원탈퇴 성공.');
      }
    });
  })
  .catch((err) => {
    res.status(500).send(err);
  });
})

//카카오 로그인
router.get('/kakao', passport.authenticate('kakao'));

router.get(
  '/kakao/callback',

  passport.authenticate('kakao', {
    failureRedirect: '/',
}),
  (req, res) => {
    console.log("🚀 ~ file: auth.js ~ line 140 ~ res", res)
    res.redirect(process.env.CALL_BACK);
  },
);

//구글 로그인
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  
  (req, res) => {
    console.log("🚀 ~ file: auth.js ~ line 153 ~ res", res)
    res.redirect(process.env.CALL_BACK);
  },
);

module.exports = router