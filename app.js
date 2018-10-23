'use strict';

const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');

const server = Hapi.server({
    host: config.host,
    port: config.port,
});

server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
]);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();