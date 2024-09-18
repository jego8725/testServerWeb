import { DataTypes } from 'sequelize';
import { Client } from './client.js';
import { connection } from '../config.js';

const Service = connection.define('service', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    initDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lastfacturer: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ultimoPago: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    idClient: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id',
        },
    },
}, {
  tableName: 'service'
});

export { Service };