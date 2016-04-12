Ext.define('CFSLocales.Locales', {
    singleton: true,
    requires: [
        'Ext.util.Cookies',
        'I18next.Wrapper'
    ],

    locale: 'zh_CN',
    resources: {
        en: {
            translation: {
                "key": "hello world",

                "nav" : "Navigation",
                "cluster": "Host Cluster",
                "file_mgmt" : "File List",
                "usr_mgmt": "User Management",
                "file_retrieve": "File Retrieve",
                "node_usage_chart": "Host Resource",
                "host_io_statistics": "Host IO Statistics",
                "cluster_host_list": "Host List",
                "host_name": "Host Name",
                "connection_status": "Connection Status",
                "storage_status": "Storage Status",
                "service_status": "Service Status",
                "host_cluster_info": "Host Status",
                "time": "Time",
                "event_description": "Event Description",
                "acknowledged": "Acknowledged",
                "host_cluster_events": "Host Events",
                "acknowledge": "Acknowledge",
                "operation_records": "Operation Records",
                "metadata": "Meta Data",
                "file_list": "File List",
                "quota": "Quota",
                "user_list": "User List",
                "name": "Name",
                "type": "Type",
                "email": "Email",
                "state": "State",
                "used": "Used",
                "unused": "Unused",
                "retrieval": "Retieval",
                "path": "Path",
                "account": "Account",
                "size": "Size",
                "options": "Options",
                "username": "User Name",
                "password": "Password",
                "login": "Login",
                "logout": "Logout",
                "login_error": "Login Error",
                "logout_failed": "Logout Failed",
                "recycle_bin": "Recycle Bin",
                "check_login_error": "Checking Login Error",
                "file_info": "File Information"
            }
        },
        zh_CN: {
            translation: {
                "key": "你好",

                "nav" : "导航栏",
                "cluster": "集群管理",
                "file_mgmt" : "文件管理",
                "usr_mgmt": "用户管理",
                "file_retrieve" : "文件检索",
                "node_usage_chart": "主机资源使用情况",
                "host_io_statistics": "主机IO统计",
                "cluster_host_list": "主机列表",
                "host_name": "主机名",
                "connection_status": "连接状态",
                "storage_status": "存储状态",
                "service_status": "服务状态",
                "host_cluster_info": "主机状态",
                "time": "时间",
                "event_description": "事件描述",
                "acknowledged": "是否确认",
                "host_cluster_events": "主机事件",
                "acknowledge": "确认",
                "operation_records": "操作记录",
                "metadata": "元信息",
                "file_list": "文件列表",
                "quota": "配额",
                "user_list": "用户列表",
                "name": "名称",
                "type": "类型",
                "email": "邮件",
                "state": "状态",
                "used": "已使用",
                "unused": "未使用",
                "retrieval": "检索",
                "path": "路径",
                "account": "帐户",
                "size": "大小",
                "options": "选项",
                "username": "用户名",
                "password": "密码",
                "login": "登录",
                "logout": "注销",
                "login_error": "登录错误",
                "logout_failed": "注销失败",
                "recycle_bin": "回收站",
                "check_login_error": "验证用户登录失败",
                "file_info": "文件信息"
            }
        }
    },

    init: function(locale, resources) {
        var singleton = this;
        if (locale) {
            singleton.locale = locale;
        }
        if (resources) {
            singleton.resources = resources;
        }
        I18next.Wrapper.i18next.init({
            lng: singleton.locale,
            resources: singleton.resources
        });
    }

}, function() {
    console.log('init locales');

    var singleton = this;
    var locale = Ext.util.Cookies.get('locale');
    singleton.init(locale);

    // global function '_', just as gettext
    window._ = function(key, options) {
        return I18next.Wrapper.i18next.t(key, options);
    };

});
