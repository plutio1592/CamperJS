const express = require('express')
const {campingImageURL, camping} = require('../models')
const sequelize = require('sequelize');

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const campings = await camping.findAll()
    res.render('sequelize', {campings, campingImageURL})
  } catch (err) {
    console.error(err)
    next(err)
  }

})

module.exports = router