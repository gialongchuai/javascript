
// modules

import logger, {
    TYPE_LOG, TYPE_WARN, TYPE_ERROR
} from './logger.js';

logger('Messages ...',TYPE_LOG); // Messages ... kiểu normal
logger('Messages ...',TYPE_WARN); // Messages ... kiểu warning có dấu chấm than
logger('Messages ...',TYPE_ERROR); // Messages ... kiểu error có dấu x đỏ