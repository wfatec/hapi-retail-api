// routes/hello-hapi.js
module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'hello hapi';
        },
        options: {
            tags: ['api', 'tests'],
            description: '测试hello-hapi',
        }
    }
]