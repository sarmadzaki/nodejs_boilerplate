'use strict';

import { Router } from "express";
import { log } from "../services/middlewares/helper";
import 
{   openLockHandler,
    closeLockHandler,
    getAvailableLocksHandler,
    getMyLocksHandler 
} 
    from '../services/handlers/lock';

export default class LockApi {
    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        let router = this.router;
        router.post('/open', log, openLockHandler),
        router.post('/close', log, closeLockHandler ),
        router.get('/available-locks', log, getAvailableLocksHandler ),
        router.get('/get-my-locks', log, getMyLocksHandler )       
    }

    getRouter() {
        return this.router;
    }

    getRouteGroup() {
        return '/lock';
    }
}