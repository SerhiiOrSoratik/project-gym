const models = require('../dbModels/models');

class ClientModel {

    async addClient(options) {
        await models.Clients.create({options}); 
    }
}

module.exports = new ClientModel();