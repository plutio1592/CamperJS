const express = require('express')
const sequelize = require('sequelize');
const {campingImageURL, camping} = require('../models')

const router = express.Router()

router.route('/')
  .get(async (req, res, next) => {
    try {
      const campings = await camping.findAll({
        // include: [{
        //   model: campingImageURL,
        //   attributes: ['id'],
        //   where: {
        //     id: id,
        //   }
        // }]
      })
      res.json(campings)
    }
    catch (err) {
      console.error(err)
      next(err)
    }
  })
  // .get(async (req, res, next) => {
  //   try {
  //     const campingImageURLs = await campingImageURL.findAll({
  //     })
  //     res.json(campingImageURLs)
  //   }
  //   catch (err) {
  //     console.error(err)
  //     next(err)
  //   }
  // })

  module.exports = router