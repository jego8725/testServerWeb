import { Sequelize } from 'sequelize';

const urlConnect = 'mysql://root:root@127.0.0.1:3306/test';
const connection = new Sequelize(urlConnect, { 
    logging: true,
    timezone: '-05:00'
});

export {connection};