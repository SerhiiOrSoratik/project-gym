const ClientModel = require('../models/client');

class Client {

    addClient(req, res) {
        try {
            ClientModel.addClient(req.body);
            res.status(201);
            res.end();
        }
        catch {
            res.end('error');
        }
    }
}

module.exports = new Client();