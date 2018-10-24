const GROUP_NAME = 'shops';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: (request, h) => {
            return;
        },
        options: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺列表',
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