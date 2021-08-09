const sequelize = require('../sequelize');
const {DataTypes, STRING} = require('sequelize');

const Clients = sequelize.define('clients', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    login: {type: DataTypes.STRING, allowNull: false, unique: true},
    pass: {type: DataTypes.STRING, allowNull: false}
});
 
const Cards = sequelize.define('cards', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    type: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    money: {type: DataTypes.INTEGER, allowNull:false},
    credit_money: {type: DataTypes.INTEGER, allowNull: false},
    subscription: {type: DataTypes.BOOLEAN, allowNull: false},
    description: {type: DataTypes.STRING, allowNull:false}
});

const Services = sequelize.define('services', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
});

Clients.hasOne(Cards);
Cards.belongsTo(Clients);


module.exports = {
Clients, Cards, Services
}