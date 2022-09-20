const express = require('express')
const {user} = require('../../models');

const router = express.Router()

router.route('/')
  .post(async (req, res, next) => {
    try {
      const users = await user.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        phoneChk: req.body.phoneChk,
        loginType: req.body.loginType,
      })
      console.log(users)
      res.status(201).json(user)
    }
    catch (err) {
      console.error(err)
      next(err)
    }
  })
//DB 회원정보 암호화 고려
  module.exports = router