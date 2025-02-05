import * as env from 'env-var';
require('dotenv').config()

export const srvConfig = {
    port: env.get('SRV_PORT').required().asPortNumber()
}