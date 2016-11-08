module.exports = {
    api: '/mock/todo-type',

    response: function (req, res) {
        res.json({
            "杨东的测试项目9": [
                {
                    "stateId": 145,
                    "asActive": true,
                    "asDefault": true,
                    "projectId": 20,
                    "projectName": "杨东的测试项目9",
                    "stateName": "新建",
                    "issueType": "Story"
                }
            ],
            "测试版本归并": [
                {
                    "stateId": 502,
                    "asActive": true,
                    "asDefault": false,
                    "projectId": 90,
                    "projectName": "测试版本归并",
                    "stateName": "测试-完成",
                    "issueType": "Story"
                }
            ],
            "修复bug项目": [
                {
                    "stateId": 61,
                    "asActive": true,
                    "asDefault": false,
                    "projectId": 8,
                    "projectName": "修复bug项目",
                    "stateName": "测试-完成",
                    "issueType": "Story"
                }
            ],
            "示例项目2": [
                {
                    "stateId": -41,
                    "asActive": true,
                    "asDefault": false,
                    "projectId": -8,
                    "projectName": "示例项目2",
                    "stateName": "迭代BACKLOG",
                    "issueType": "Story"
                }
            ]
        });
    }
}