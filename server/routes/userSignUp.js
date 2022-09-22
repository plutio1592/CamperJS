const express = require('express')
const {user} = require('../models');
const bcrypt = require('bcrypt');
// const passport = require('passport');
// const { removeTicks } = require('sequelize/types/utils');

const router = express.Router()

router.post('/signup', async (req, res, next) => {
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
      //DB Password 암호화
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
      // console.log(users)
      res.status(201).send("회원가입 완료")
    }
    catch (err) {
      console.error(err)
      next(err)
    }
  })

  // router.post('/login', async (req, res, next) => {
  //   //authenticate(서버에러, 성공, 클라이언트에러)
  //   passport.authenticate('local', (err, users, info) => {
  //     if (err) {
  //       console.error(err)
  //       return next(err)
  //     }
  //     if (info) {
  //       return res.status(401).send(info.reason)
  //     }
  //     return req.login(users, async (loginErr) => {
  //       console.log(req.login)
  //       if (loginErr) {
  //         console.error(loginErr)
  //         return next(loginErr)
  //       }
  //       return res.status(200).json(users)
  //     })
  //   })(req, res, next)
  // })

  module.exports = router