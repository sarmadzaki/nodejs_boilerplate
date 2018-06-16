'use strict';

import {Request, Response} from 'express';

export function homeHandler(req, res) {
    res.send('Home Handler');
}
