'use strict';

/**
 * env2 需放在最上面，config文件才能正确获取环境变量
 */
require('env2')('./.env');

const Hapi = require('hapi');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const config = require('./config');
const routesHelloHapi = require('./tests/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const routesUsers = require('./routes/users');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');
// 引入分页插件配置
const pluginHapiPagination = require('./plugins/hapi-pagination');
// 引入权限验证插件配置
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = Hapi.server({
    host: config.host,
    port: config.port,
});


const init = async () => {
    // 注册插件
    await server.register([
        ...pluginHapiSwagger,
        pluginHapiPagination,
        hapiAuthJWT2,
    ]);
    pluginHapiAuthJWT2(server);

    // 注册路由
    await server.route([
        // 创建一个简单的 hello hapi 接口
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders,
        ...routesUsers,
    ]);
    
    // 启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();