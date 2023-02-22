const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
        type: DataTypes.STRING,
        trim: true,
        validate: {
            len: [3, 50],
        },
    },
    email: {
        type: DataTypes.STRING,
        trim: true,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: { type: DataTypes.STRING },

}, {
    timestamps: true,
    createdAt: true,
    updatedAt: true,
});
module.exports = {
    User,
};
