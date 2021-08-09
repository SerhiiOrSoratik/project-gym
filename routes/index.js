const express = require('express');
const router = express.Router();

const clients = require('./client');

routes.initialize(express);
router.use('/client', clients);


module.exports = router;