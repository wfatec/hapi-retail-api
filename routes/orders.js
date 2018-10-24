const GROUP_NAME = 'orders';

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}`,
        handler: (request, h) => {
            return;
        },
        options: {
            tags: ['api', GROUP_NAME],
            description: '创建订单',
        }
    }, {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: (request, h) => {
            return;
        },
        options: {
            tags: ['api', GROUP_NAME],
            description: '支付某条订单',
        }
    }
]