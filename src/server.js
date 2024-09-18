import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { Routes } from "./routes.js";

const __dirname = path.resolve();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(Routes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/client', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'pages/client/createClient.html'));
});

export { app };