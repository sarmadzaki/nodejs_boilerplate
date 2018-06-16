'use strict';

import { Request, Response, NextFunction } from 'express';
import config from '../../conf';

export function nodeENV() {
    return config.app['environment'] || "dev";
}

export function log(req, resp, next) {
    if (nodeENV() !== 'production') {
        console.log("calling " + req.originalUrl);
    }
    next();
}