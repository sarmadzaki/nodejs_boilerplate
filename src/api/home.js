'use strict';

import {Router} from "express";
import {log} from "../services/middlewares/helper";
import {homeHandler} from '../services/handlers/home';

export default class HomeAPI {
    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        let router = this.router;
        router.get('/', log, homeHandler)
    }

    getRouter() {
        return this.router;
    }

    getRouteGroup() {
        return '/home';
    }
}