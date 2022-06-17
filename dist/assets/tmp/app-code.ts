export class Selection {
    name: string;
    value: any;
    selected = false;
}

export class AppCode {
    static code = {
        color: [
            { name: '紫红色', value: 'magenta' },
            { name: '红色', value: 'red' },
            { name: '淡红', value: 'volcano' },
            { name: '橙色', value: 'orange' },
            { name: '金色', value: 'gold' },
            { name: '绿黄色', value: 'lime' },
            { name: '绿色', value: 'green' },
            { name: '青色', value: 'cyan' },
            { name: '蓝色', value: 'blue' },
            { name: '深蓝色', value: 'geekblue' },
            { name: '紫色', value: 'purple' }
        ],
        // 用户性别
        sex: [
            { name: '男', value: '1' },
            { name: '女', value: '2' },
            { name: '未知', value: '3' },
        ],
        // 用户编制情况
        userSource: [
            { name: '在编', value: '1' },
            { name: '编外', value: '2' },
        ],
        // 管理员角色
        adminUserRole: [
            { name: '系统管理员', value: '1' },
            { name: '应用管理员', value: '2' },
            { name: '街镇管理员', value: '3' },
        ],
        // 应用状态
        appStatus: [
            { name: '待提交', value: '0' },
            { name: '待上线', value: '1' },
            { name: '已上线', value: '2' },
            { name: '被退回', value: '3' },
        ],

        // 账户类型
        accountType: [
            { name: '管理员', value: '0' },
            { name: '工作人员', value: '1' },
            { name: '网格员', value: '2' },
            { name: '群众', value: '3' },
        ]
    };
}
