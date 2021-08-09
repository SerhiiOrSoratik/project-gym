
const app = require('./app');
const sequelize = require('./sequelize');
const models = require('./dbModels/models')

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(3000);
    } catch (e) {
        console.log(e);
    }
}

start();