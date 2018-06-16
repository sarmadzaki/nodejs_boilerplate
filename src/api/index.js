'use strict';

import { Router, NextFunction, Request, Response } from "express";
import HomeAPI from './home';
import LockApi  from './lock'
import LogAPI from "./log";
export default class Api {
    constructor(app) {
        this.app = app;
        this.router = Router();
        this.routeGroups = [];
    }

    loadRouteGroups() {
        this.routeGroups.push(new HomeAPI());
        this.routeGroups.push(new LockApi());
        this.routeGroups.push(new LogAPI());
        
    }

    setContentType(req, resp, next) {
        resp.set('Content-Type', 'text/json');
        next();
    }

    registerGroup() {
        this.loadRouteGroups();
        this.routeGroups.forEach(rg => {
            let setContentType = rg.setContentType ? rg.setContentType : this.setContentType;
            this.app.use('/api' + rg.getRouteGroup(), setContentType, rg.getRouter())
        });
    }
}