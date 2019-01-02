import mockjs from 'mockjs';

export default {
    // 支持值为 Object 和 Array
    '/api/users': mockjs.mock({
        'list|10': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
    }),

    'POST /login-in': mockjs.mock(
        {
            name: '@cname',
            'id|1-100': 50,
            'sex|0-2': 1,
            city: '@city',
            phone: /^1[0-9]{10}$/,
            email: '@email',
            'avatar|1': [
                'http://originoo-1.b0.upaiyun.com/dev/sites/image/author_default_avatar_5.png',
                'http://originoo-1.b0.upaiyun.com/dev/sites/image/author_default_avatar_1.png',
                'http://originoo-1.b0.upaiyun.com/dev/sites/image/author_default_avatar_2.png',
                'http://originoo-1.b0.upaiyun.com/dev/sites/image/author_default_avatar_3.png',
                'http://originoo-1.b0.upaiyun.com/dev/sites/image/author_default_avatar_4.png',
            ],
            'remainingsum|1-10000': 5000,
            'nopayorder|1-9': 1,
            'haspics|1-100': 50,
            'noinvoice|1-100000': 50000
        },
    ),
    '/user-new-download-info': mockjs.mock(
        {
            'all|1-9': 5,
            'photo|10-20': 15,
            'vect|1-6': 3,
            'video|1-4': 2
        },
    ),
    '/pic-list': mockjs.mock(
        {
            'total|100-9999': 500
        },
    ),
};