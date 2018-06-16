'use strict';

import express from 'express'
import  Router from 'express';
import Api from './api/index'
import config from './conf';
import cors from 'cors';
import { join } from 'path';
import log from './services/middlewares/helper';
import homeHandler from './api/home'
import * as webSocket from 'ws';
const routes = Router();
const app = express();
let port = config.app['port'];
let whitelist = Object.keys(config.whitelist).map(k => config.whitelist[k]);

app.set("port", port);
app.use(cors({
    origin: (origin, callback) => {
        let originIsWhitelisted = whitelist.indexOf(origin) !== -1 || typeof origin === "undefined";
        callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
    }
}));

new Api(app).registerGroup();
app.use('/static', express.static(join(__dirname, 'static')));



const server = app.listen(port, () => {
    console.log(`server listening on ${port}`);
});

