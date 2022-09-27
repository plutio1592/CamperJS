const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares')
const {user} = require('../models')

const router = express.Router()

router.post('/join', async (req, res, next) => {
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

    // const exUser = await user.findOne({ where: { email } })
    // if (exUser) {
    //   return res.redirect('/join?error=exist')
    // }

    // const hash = await bcrypt.hash(password, 12)
    // await user.create({
    //   email,
    //   password: hash,
    //   username,
    //   name,
    //   phone
    // })
    // res.status(201).send("회원가입 완료")

  } catch (err) {
    console.error(err)
    return next(err)
  }
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (authError, users, info) => {
    if (authError) {
      console.error(authError)
      return next(authError)
    }

    if(users) {
      return res.status(401).send(info.reason)
    }
    return req.login(users, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr)
        return next(loginErr)
      }
      return res.status(200).json(users)
    })
    // if(authError) {
    //   console.error(authError)
    //   return next(authError)
    // }
    // if(!users) {
    //   return res.redirect(`/?loginError=${info.message}`)
    // }
    // return req.login(users, loginError => {
    //   if (loginError) {
    //     console.error(loginError)
    //     return next(loginError)
    //   }
    //   return res.redirect('/')
    // })

  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router