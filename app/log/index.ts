import log4js = require('log4js');
import config from './config';
log4js.configure(config);
export var logger = log4js.getLogger("信息");
export var use =  function initLog(app: any) {
 
}

