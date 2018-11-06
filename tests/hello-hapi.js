const { jwtHeaderDefine } = require('../utils/router-helper');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            console.log(request.auth.credentials); // 控制台输出 { userId: 1}
            return 'hello hapi';
        },
        options: {
            tags: ['api', 'tests'],
            description: '测试hello-hapi',
            validate: {
                ...jwtHeaderDefine,
            },
        }
    }
]