const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const {user} = require('../models')

const router = express.Router()

//로컬 회원가입
router.post('/signup', async (req, res, next) => {
  // const { username, password, name, email, phone } = req.body;

  try {
    const searchDuplicateId = await user.findOne({
      where: {
        username: req.body.username,
      }
    })
    if (searchDuplicateId) {
      return res.status(403).send('이미 사용중인 계정입니다.')
    }


    const searchDuplicateEmail = await user.findOne({
      where: {
        email: req.body.email,
      }
    })
    if (searchDuplicateEmail) {
      return res.status(403).send('이미 사용중인 이메일입니다.')
    }

    const searchDuplicatePhone = await user.findOne({
      where: {
        email: req.body.Phone,
      }
    })
    if (searchDuplicatePhone) {
      return res.status(403).send('이미 사용중인 번호입니다.')
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    await user.create({
      username: req.body.username,
      password: hashedPassword,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      phoneChk: req.body.phoneChk,
      loginType: req.body.loginType,
    })
    res.status(201).send("회원가입 완료")

  } catch (err) {
    console.error(err)
    return next(err)
  }
})

//로컬 로그인
router.post('/login', (req, res, next) => {
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
      return res.status(200).json(users)
    })
  })(req, res, next)
})

//로그아웃
router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

//로그인유지
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

module.exports = router