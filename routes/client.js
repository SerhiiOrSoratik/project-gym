const Router = require('express');
const router = new Router();
const models = require('../dbModels/models');
const Client = require('../controllers/client');

router.post('/new', (req, res) => {
    Client.addClient(req, res);
})

module.export = router;