'use strict'

const Customers = require('./customers')
const Status = require('./status')
const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const packages = sequelize.define('packages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    tracking: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'packages',
    timestamps: false
})

//Foraneas
packages.belongsTo(Status, {foreignKey: 'id'})
packages.belongsTo(Customers, {foreignKey: 'id'})

module.exports = packages