const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING(200),
        allowNull: true,
        defaultValue: ''
    }
},

    {
        tableName: 'users',
        timestamps: false
    });

module.exports = User;