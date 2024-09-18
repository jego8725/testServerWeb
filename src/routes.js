import express from 'express';
import { getClients } from './services/index.js';

const Routes = express.Router();

Routes.post('/getClients', async function (req, res, next) {
    const clients = getClients();
    res.json({ result: 'OK', data: clients });
});

export { Routes };