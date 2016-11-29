module.exports = {
    api: '/mock/search',

    response: function (req, res) {
        res.json({
            search: {
                q: '11',
                type: 'Card',
                atMe: false,
                rowCount: 10,
                current: 1
            },
            result: [
                {
                    searchResult: {
                        id: 4004,
                        highlightedResult: '<match>11</match>',
                        rank: 0.1
                    },
                    id: 4004,
                    name: '11',
                    seqNo: 707,
                    projectId: -8,
                    projectName: '示例项目2',
                    cardType: 'Story',
                    createdBy: {
                        id: -13,
                        username: 'gaoning1',
                        fullName: '高宁',
                        email: 'gaoning1@pingan.com.cn',
                        avatarKey: '5iRX8cBXK1',
                        userCenterId: 148,
                        avatarUrl: 'http://vt-dev.paic.com.cn:8080/user-center-web/profile/avatar/5iRX8cBXK1',
                        superAdmin: false,
                        displayName: '高宁(gaoning1)'
                    },
                    createdDate: '2016-11-24 11:21:09',
                    currentOwner: null,
                    importance: null,
                    isArchived: false
                }, {
                    searchResult: {
                        id: 3790,
                        highlightedResult: '<match>11</match>',
                        rank: 0.1
                    },
                    id: 3790,
                    name: '11',
                    seqNo: 688,
                    projectId: -8,
                    projectName: '示例项目2',
                    cardType: 'Story',
                    createdBy: {
                        id: -12
                    },
                    createdDate: '2016-11-23 11:06:39',
                    currentOwner: null,
                    importance: null,
                    isArchived: false
                }, {
                    searchResult: {
                        id: 3568,
                        highlightedResult: '水电费水电水电费<match>11</match>',
                        rank: 0.1
                    },
                    id: 3568,
                    name: '水电费11',
                    seqNo: 643,
                    projectId: -8,
                    projectName: '示例项目2',
                    cardType: 'Story',
                    createdBy: {
                        id: -12
                    },
                    createdDate: '2016-11-18 15:33:23',
                    currentOwner: {
                        id: 36,
                        username: 'gaoai244',
                        fullName: '高爱',
                        email: 'GAOAI244@paic.com.cn',
                        avatarKey: null,
                        userCenterId: null,
                        avatarUrl: '',
                        superAdmin: false,
                        displayName: '高爱(gaoai244)'
                    },
                    importance: null,
                    isArchived: false
                }, {
                    searchResult: {
                        id: 3527,
                        highlightedResult: '测试测试滚动滚动条故事故事<match>11</match>',
                        rank: 0.1
                    },
                    id: 3527,
                    name: '测试滚动条故事11',
                    seqNo: 15,
                    projectId: 6,
                    projectName: '演示项目',
                    cardType: 'Story',
                    createdBy: {
                        id: -13,
                        username: 'gaoning1',
                        fullName: '高宁',
                        email: 'gaoning1@pingan.com.cn',
                        avatarKey: '5iRX8cBXK1',
                        userCenterId: 148,
                        avatarUrl: 'http://vt-dev.paic.com.cn:8080/user-center-web/profile/avatar/5iRX8cBXK1',
                        superAdmin: false,
                        displayName: '高宁(gaoning1)'
                    },
                    createdDate: '2016-11-17 16:30:29',
                    currentOwner: null,
                    importance: null,
                    isArchived: true
                }, {
                    searchResult: {
                        id: 3527,
                        highlightedResult: '测试测试滚动滚动条故事故事<match>11</match>',
                        rank: 0.1
                    },
                    id: 3527,
                    name: '测试滚动条故事11',
                    seqNo: 15,
                    projectId: 6,
                    projectName: '演示项目',
                    cardType: 'Story',
                    createdBy: {
                        id: -13,
                        username: 'gaoning1',
                        fullName: '高宁',
                        email: 'gaoning1@pingan.com.cn',
                        avatarKey: '5iRX8cBXK1',
                        userCenterId: 148,
                        avatarUrl: 'http://vt-dev.paic.com.cn:8080/user-center-web/profile/avatar/5iRX8cBXK1',
                        superAdmin: false,
                        displayName: '高宁(gaoning1)'
                    },
                    createdDate: '2016-11-17 16:30:29',
                    currentOwner: null,
                    importance: null,
                    isArchived: false
                }, {
                    searchResult: {
                        id: 3527,
                        highlightedResult: '测试测试滚动滚动条故事故事<match>11</match>',
                        rank: 0.1
                    },
                    id: 3527,
                    name: '测试滚动条故事11',
                    seqNo: 15,
                    projectId: 6,
                    projectName: '演示项目',
                    cardType: 'Story',
                    createdBy: {
                        id: -13,
                        username: 'gaoning1',
                        fullName: '高宁',
                        email: 'gaoning1@pingan.com.cn',
                        avatarKey: '5iRX8cBXK1',
                        userCenterId: 148,
                        avatarUrl: 'http://vt-dev.paic.com.cn:8080/user-center-web/profile/avatar/5iRX8cBXK1',
                        superAdmin: false,
                        displayName: '高宁(gaoning1)'
                    },
                    createdDate: '2016-11-17 16:30:29',
                    currentOwner: null,
                    importance: null,
                    isArchived: true
                }, {
                    searchResult: {
                        id: 3527,
                        highlightedResult: '测试测试滚动滚动条故事故事<match>11</match>',
                        rank: 0.1
                    },
                    id: 3527,
                    name: '测试滚动条故事11',
                    seqNo: 15,
                    projectId: 6,
                    projectName: '演示项目',
                    cardType: 'Story',
                    createdBy: {
                        id: -13,
                        username: 'gaoning1',
                        fullName: '高宁',
                        email: 'gaoning1@pingan.com.cn',
                        avatarKey: '5iRX8cBXK1',
                        userCenterId: 148,
                        avatarUrl: 'http://vt-dev.paic.com.cn:8080/user-center-web/profile/avatar/5iRX8cBXK1',
                        superAdmin: false,
                        displayName: '高宁(gaoning1)'
                    },
                    createdDate: '2016-11-17 16:30:29',
                    currentOwner: null,
                    importance: null,
                    isArchived: false
                }
            ],
            total: 59
        });
    }
};
