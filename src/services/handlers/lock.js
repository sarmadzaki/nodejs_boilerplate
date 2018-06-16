'use strict';

import {Request, Response} from 'express';

export function openLockHandler(req, res) {
    res.json({success: true, message: 'openLockHandler handler called'});
}

export function closeLockHandler(req, res) {
    res.json({success: true, message: 'closeLockHandler handler called'});
}

export function getAvailableLocksHandler(req, res) {
    res.json({success: true, message: 'getAvailableLocksHandler handler called'});
}

export function getMyLocksHandler(req, res) {
    res.json({success: true, message: 'getMyLocksHandler handler called'});
}