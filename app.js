'use strict';

/**
 * env2 需放在最上面，config文件才能正确获取环境变量
 */
require('env2')('./.env');

const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');

const server = Hapi.server({
    host: config.host,
    port: config.port,
});


const init = async () => {
    await server.register([
        // 为系统使用 hapi-swagger
        ...pluginHapiSwagger,
        pluginHapiPagination,
    ]);

    await server.route([
        // 创建一个简单的 hello hapi 接口
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders,
    ]);
    
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();