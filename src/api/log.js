'use strict';

import { Router } from "express";
import { log } from "../services/middlewares/helper";
import { getMyLogsHandler } from '../services/handlers/log';

export default class LogAPI {
    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        let router = this.router;
        router.get('/get-my-logs', getMyLogsHandler)
    }

    getRouter() {
        return this.router;
    }

    getRouteGroup() {
        return '/log';
    }
}