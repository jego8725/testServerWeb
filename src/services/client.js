import { Client } from '../db/models/index.js';

const getClients = async () => {
    const clients = await Client.findAll();

    return clients;
};

export { getClients }