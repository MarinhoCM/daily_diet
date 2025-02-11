import * as env from 'env-var';
require('dotenv').config()

export const srvConfig = {
    port: env.get('SRV_PORT').required().asPortNumber()
}

export const keys = {
    at_public: env.get('AT_PUBLIC_KEY').required().asString(),
    at_private: env.get('AT_PRIVATE_KEY').required().asString()
}
