import { delay } from 'roadhog-api-doc';

const result = [
    {
        id: '3385666',
        comName: 'Linkedin Inc',
        country: 'United States',
        workerCount: 17,
        source: 'bing',
        description:
      'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
        socialInfo: {
            linkedin: { url: 'https://www.linkedin.com/company/6042986' },
            facebook: { url: 'https://www.linkedin.com/company/6042986' },
            twitter: { url: 'https://www.linkedin.com/company/6042986' },
        },
        imgs: [
            { url: '//q.zvk9.com/1718/2018/07/11/Cabbage Penjing carved by Natural jade-153130282586.png_thumb_220x220.jpg' },
            { url: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg' },
            { url: '//q.zvk9.com/1718/2018/04/24/Facial Beauty Massage Scraping Tablets-152455212691.png_thumb_220x220.jpg' },
        ],
        domain: 'edgeway.ca',
        is_deep: 1,
        link: 'https://www.edgeway.ca/',
        title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
    },
    {
        id: '3385667',
        comName: 'Viss Veikaliem Un Noliktavām',
        country: 'United States',
        workerCount: 20,
        source: 'facebook',
        description:
      'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
        socialInfo: {
            linkedin: { url: 'https://www.linkedin.com/company/6042986' },
            facebook: { url: 'https://www.linkedin.com/company/6042986' },
        },
        imgs: [
            { url: '//q.zvk9.com/1718/2018/07/11/Cabbage Penjing carved by Natural jade-153130282586.png_thumb_220x220.jpg' },
            { url: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg' },
        ],
        domain: 'edgeway.ca',
        is_deep: 2,
        link: 'https://www.edgeway.ca/',
        title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
    },
    {
        id: '3385668',
        comName: 'Munchkin Inc',
        country: 'United States',
        workerCount: 30,
        source: 'customsData',
        description:
      'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
        socialInfo: {
            linkedin: { url: 'https://www.linkedin.com/company/6042986' },
            facebook: { url: 'https://www.linkedin.com/company/6042986' },
        },
        imgs: [
            { url: '//q.zvk9.com/1718/2018/04/24/Facial Beauty Massage Scraping Tablets-152455212691.png_thumb_220x220.jpg' },
        ],
        domain: 'edgeway.ca',
        is_deep: 3,
        link: 'https://www.edgeway.ca/',
        title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
    },
    {
        id: '3385669',
        comName: 'Facebook Com Universe',
        country: 'United States',
        workerCount: 35,
        source: 'linkedin',
        description:
      'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
        socialInfo: { facebook: { url: 'https://www.linkedin.com/company/6042986' } },
        imgs: [
            { url: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg' },
            { url: '//q.zvk9.com/1718/2018/04/24/Facial Beauty Massage Scraping Tablets-152455212691.png_thumb_220x220.jpg' },
        ],
        domain: 'edgeway.ca',
        is_deep: 1,
        link: 'https://www.edgeway.ca/',
        title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
    },
    {
        id: '3385670',
        comName: 'Twitter Linking Company',
        country: 'United States',
        workerCount: 43,
        source: 'twitter',
        description:
      'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
        socialInfo: {},
        imgs: [
            { url: '//q.zvk9.com/1718/2018/07/11/Cabbage Penjing carved by Natural jade-153130282586.png_thumb_220x220.jpg' },
        ],
        domain: 'edgeway.ca',
        is_deep: '3',
        link: 'https://www.edgeway.ca/',
        title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
    },
];

const proxy = {
    'POST /tonpalgs/startSearch': {
        code: 200,
        keywords: 'edge way',
        msg: '信息获取成功',
        result,
        total: 44,
        search_type: 'all',
    },
    // POST POST 可省略
    'POST /tonpalgs/showSearchResult': {
        code: 200,
        keywords: 'edge way',
        msg: '信息获取成功',
        result,
        total: 44,
        search_type: 'all',
    },
    'POST /tonpalgs/searchInRecord': {
        code: 200,
        keywords: 'edge way',
        msg: '信息获取成功',
        result: [
            {
                key: '1',
                keyWords: 'Pen',
                searchResult: 32,
                searchTime: '2018-10-01',
                searchKeyId: '1111',
            },
            {
                key: '2',
                keyWords: 'Remote Control',
                searchResult: 42,
                searchTime: '2019-01-02',
                searchKeyId: '2222',
            },
            {
                key: '3',
                keyWords: 'Mirror',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '3333',
            },
            {
                key: '4',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '5',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '6',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '7',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '8',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '9',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '10',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '11',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '12',
                keyWords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
        ],
        total: 44,
        search_type: 'all',
    },
    // 搜索记录
    'POST /tonpalgs/getSearchResultList': {
        code: 200,
        msg: '信息获取成功',
        result: [
            {
                key: '1',
                id: '1111',
                keywords: 'Pen',
                searchResult: 32,
                searchTime: '2018-10-01',
            },
            {
                key: '2',
                id: '2222',
                keywords: 'Remote Control',
                searchResult: 42,
                searchTime: '2019-01-02',
                searchKeyId: '2222',
            },
            {
                key: '3',
                id: '3333',
                keywords: 'Mirror',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '3333',
            },
            {
                key: '4',
                id: '4444',
                keywords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '5',
                id: '5555',
                keywords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '6',
                id: '6666',
                keywords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '7',
                id: '7777',
                keywords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '8',
                id: '8888',
                keywords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '9',
                id: '9999',
                keywords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
            {
                key: '10',
                id: '10101010',
                keywords: 'candy',
                searchResult: 32,
                searchTime: '2019-01-02',
                searchKeyId: '4444',
            },
        ],
        total: 44,
        search_type: 'all',
    },
    // 深挖记录
    'POST /tonpalgs/deepRecord': {
        code: 200,
        keywords: 'edge way',
        msg: '信息获取成功',
        result: [
            {
                id: '3385666',
                comName: 'Linkedin Inc',
                country: 'United States',
                workerCount: 17,
                source: 'bing',
                description:
              'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                socialInfo: {
                    linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                    facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    twitter: { url: 'https://www.linkedin.com/company/6042986' },
                },
                imgs: [
                    { url: '//q.zvk9.com/1718/2018/07/11/Cabbage Penjing carved by Natural jade-153130282586.png_thumb_220x220.jpg' },
                    { url: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg' },
                    { url: '//q.zvk9.com/1718/2018/04/24/Facial Beauty Massage Scraping Tablets-152455212691.png_thumb_220x220.jpg' },
                ],
                domain: 'edgeway.ca',
                is_deep: 4,
                link: 'https://www.edgeway.ca/',
                title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
            },
            {
                id: '3385667',
                comName: 'Viss Veikaliem Un Noliktavām',
                country: 'United States',
                workerCount: 20,
                source: 'facebook',
                description:
              'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                socialInfo: {
                    linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                    facebook: { url: 'https://www.linkedin.com/company/6042986' },
                },
                imgs: [
                    { url: '//q.zvk9.com/1718/2018/07/11/Cabbage Penjing carved by Natural jade-153130282586.png_thumb_220x220.jpg' },
                    { url: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg' },
                ],
                domain: 'edgeway.ca',
                is_deep: 4,
                link: 'https://www.edgeway.ca/',
                title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
            },
            {
                id: '3385668',
                comName: 'Munchkin Inc',
                country: 'United States',
                workerCount: 30,
                source: 'customsData',
                description:
              'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                socialInfo: {
                    linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                    facebook: { url: 'https://www.linkedin.com/company/6042986' },
                },
                imgs: [
                    { url: '//q.zvk9.com/1718/2018/04/24/Facial Beauty Massage Scraping Tablets-152455212691.png_thumb_220x220.jpg' },
                ],
                domain: 'edgeway.ca',
                is_deep: 4,
                link: 'https://www.edgeway.ca/',
                title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
            },
            {
                id: '3385669',
                comName: 'Facebook Com Universe',
                country: 'United States',
                workerCount: 35,
                source: 'linkedin',
                description:
              'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                socialInfo: { facebook: { url: 'https://www.linkedin.com/company/6042986' } },
                imgs: [
                    { url: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg' },
                    { url: '//q.zvk9.com/1718/2018/04/24/Facial Beauty Massage Scraping Tablets-152455212691.png_thumb_220x220.jpg' },
                ],
                domain: 'edgeway.ca',
                is_deep: 4,
                link: 'https://www.edgeway.ca/',
                title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
            },
            {
                id: '3385670',
                comName: 'Twitter Linking Company',
                country: 'United States',
                workerCount: 43,
                source: 'twitter',
                description:
              'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                socialInfo: {},
                imgs: [
                    { url: '//q.zvk9.com/1718/2018/07/11/Cabbage Penjing carved by Natural jade-153130282586.png_thumb_220x220.jpg' },
                ],
                domain: 'edgeway.ca',
                is_deep: 4,
                link: 'https://www.edgeway.ca/',
                title: 'Edgeway Townhomes | Apartments in Edmonton, AB',
            },
        ],
        total: 44,
        search_type: 'all',
    },
    // 获取公司详细信息
    'POST /tonpalgs/getCompanyInfo': {
        code: 200,
        msg: '信息获取成功',
        result: {
            companyId: 3385668,
            comName: 'Munchkin Inc',
            country: 'United States',
            workerCount: 30,
            logo: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg',
            telephone: 12345678902,
            email: '12345678@qq.com',
            detailDescript:
        ' How many people are helpless Forget the injury of yesterday in the starlight Wake up and look forward to The night is covered with a bright sea of lights How many people are helpless Forget the injury of yesterday in the starlight Wake up and look forward to',
            description:
        'Check for available units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
            socialInfo: {
                linkedin: { url: 'https://www.linkedin.com/company/6042986', typeName: 'linkedin' },
                facebook: { url: 'https://www.linkedin.com/company/6042986', typeName: 'facebook' },
            },
            socialMediaInfo: [
                {
                    mediaName: 'Edgeway Townhomes1',
                    platform: 'linkedin',
                    platformUrl: 'https://www.linkedin.com/company/6042986',
                    mediaPic:
            '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg',
                    mediaDescript:
            'vailable units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                },
                {
                    mediaName: 'Edgeway Townhomes2',
                    platform: 'facebook',
                    platformUrl: 'https://www.linkedin.com/company/6042986',
                    mediaPic:
            '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg',
                    mediaDescript:
            'vailable units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                },
                {
                    mediaName: 'Edgeway Townhomes3',
                    platform: 'youtube',
                    platformUrl: 'https://www.linkedin.com/company/6042986',
                    mediaPic:
            '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg',
                    mediaDescript:
            'vailable units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                },
                {
                    mediaName: 'Edgeway Townhomes4',
                    platform: 'pinterest',
                    platformUrl: 'https://www.linkedin.com/company/6042986',
                    mediaPic:
            '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg',
                    mediaDescript:
            'vailable units at Edgeway Townhomes in Edmonton, AB. View floor plans, photos, and community amenities. Make Edgeway Townhomes your new home.',
                },
            ],
            link: 'https://www.edgeway.ca/',
            companyStaff: [
                {
                    key: '1',
                    name: 'John Brown',
                    avatar: '',
                    position: 'purchaser Manage',
                    staffEmail: '111111111@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    avatar: '',
                    position: 'purchaser',
                    staffEmail: '222222222@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '3',
                    avatar: '',
                    name: 'Joe Black',
                    position: 'purchaser Manage',
                    staffEmail: '333333333@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '4',
                    avatar: '',
                    name: 'Bled User',
                    position: 'purchaser',
                    staffEmail: '444444444@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '5',
                    avatar: '',
                    name: 'Abled User',
                    position: 'purchaser',
                    staffEmail: '555555555@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
            ],
        },
        search_type: 'all',
    },
    // 获取公司采购人列表
    'POST /tonpalgs/getPurchaserList': {
        code: 200,
        msg: '信息获取成功',
        result: {
            companyStaff: [
                {
                    key: '1',
                    name: 'John Brown',
                    avatar: '',
                    position: 'purchaser Manage',
                    staffEmail: '111111111@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    avatar: '',
                    position: 'purchaser',
                    staffEmail: '222222222@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '3',
                    avatar: '',
                    name: 'Joe Black',
                    position: 'purchaser Manage',
                    staffEmail: '333333333@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '4',
                    avatar: '',
                    name: 'Bled User',
                    position: 'purchaser',
                    staffEmail: '444444444@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
                {
                    key: '5',
                    avatar: '',
                    name: 'Abled User',
                    position: 'purchaser',
                    staffEmail: '555555555@qq.com',
                    staffSocial: {
                        linkedin: { url: 'https://www.linkedin.com/company/6042986' },
                        facebook: { url: 'https://www.linkedin.com/company/6042986' },
                    },
                },
            ],
        },
    },
    // 获取公司采购人邮件列表
    'POST /tonpalgs/getGroupEmail': {
        code: 200,
        msg: '信息获取成功',
        result: ['111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com', '111111111@qq.com',
        ],
    },
};

// 调用 delay 函数，统一处理
export default delay(proxy, 1000);
