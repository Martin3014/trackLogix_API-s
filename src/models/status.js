'use strict'

const { DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

const status = sequelize.define('status', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'status',
    timestamps: false
})

module.exports = status