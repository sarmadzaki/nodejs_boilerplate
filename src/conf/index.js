'use strict';

import {readFileSync} from 'fs';
import {parse} from 'ini';

let fileName = 'environments/config.ini';

if(process.env.APP_ENVIRONMENT!=null && process.env.APP_ENVIRONMENT!=""){
    fileName = 'environments/'+process.env.APP_ENVIRONMENT+".config.ini";
}


let config = parse(readFileSync(`${__dirname}/${fileName}`, 'utf-8'));
export default config;