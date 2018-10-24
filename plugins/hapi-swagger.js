const inert = require('inert');
const vision = require('vision');
const hapiSwagger = require('hapi-swagger');

const package = require('../package');

module.exports = [
    inert,
    vision,
    {
        plugin: hapiSwagger,
        options: {
            info: {
                title: '接口文档',
                version: package.version,
            },
            // 定义接口以 tags 属性定义为分组
            grouping: 'tags',
            tags: [
                { name: 'tests', description: '测试相关' },
                { name: 'shops', description: '店铺、商品相关' },
                { name: 'orders', description: '订单相关' },
            ]
        }
    }
]