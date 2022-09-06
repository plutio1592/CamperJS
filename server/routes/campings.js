const router = require('express').Router();
const controller = require('../controllers/campings/campings')

router.get('/', controller.campings.get)

module.exports = router;
