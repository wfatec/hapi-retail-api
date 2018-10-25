const Joi = require('joi');
const models = require('../models');

const GROUP_NAME = 'shops';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, h) => {
            
            // 通过 await 来异步查取数据
            const result = await models.shops.findAll({
                attributes: [
                    'id', 'name'
                ]
            });
            return result;
        },
        options: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表',
            validate: {
                query: {
                    limit: Joi.number().integer().min(1).default(10)
                        .description('每页的条目数'),
                    page: Joi.number().integer().min(1).default(1)
                        .description('页码数'),
                }
            },
        }
    }, {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: (request, h) => {
            return;
        },
        options: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺的商品列表',
        }
    }
]