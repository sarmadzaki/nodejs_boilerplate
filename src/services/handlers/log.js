'use strict';

import {Request, Response} from 'express';

export function getMyLogsHandler(req,res) {
    res.json({success: true, message: 'getMyLogsHandler called'})
}