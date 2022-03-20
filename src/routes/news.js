const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/NewController');

//newsController.index
router.use('/:toandn', newController.show);
router.use('/', newController.index);

module.exports = router;
