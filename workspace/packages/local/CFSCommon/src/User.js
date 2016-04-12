/*
    utilities about cfs user.
    and to cache currently loggined user info.
*/
Ext.define('CFSCommon.User', {
    requires: [
        'Tools.Json',
        "Tools.MsgBox",
        "CFSLocales.Locales"
    ],

    singleton: true,

    /* 
        notes:
            macros below should be consistent with server side user info,
            which is in app.cfsuser -> app.cloudfs.user
    */

    /*
        user types
    */
    userTypes: {
        ADMIN: 'admin',
        USER: 'user'
    },

    /*
        user state
    */
    userStates: {
        ENABLED: 'enabled',
        DISABLED: 'disabled'
    },

    /* user info */
    email: null,
    tenant: null,

    /* custom utility */

    /*
        login, and cache user info
        params:
        options: {
            email: 'xxx',
            password: 'xxx',
            success: function(email, tenant, usertype) {} ,
            failure: function(errmsg) {},
            callback: function(response) {}
        }
    */
    login: function (options) {
        var me = this,
            email = options.email,
            password = options.password;

        Tools.Json.request({
            url: '/cfs/login/',
            method: 'POST',
            jsonData: (email && password) ? {'email': email, 'password': password} : null,
            success: function(response) {
                if (response['success']) {
                    me.email = response['email'];
                    me.tenant = response['tenant'];
                    if (options.success) {
                        options.success(response['email'], response['tenant'], response['usertype']);
                    }
                }
                else {
                    if (options.failure) {
                        options.failure(response['msg']);
                    }
                    else {
                        Tools.MsgBox.error(_('login_error'), response['msg']);
                    }
                }

                if (options.callback) {
                    options.callback(response);
                }
            }
        });

    },


    /*
        check whether current user logged in
        update user info if logged in.
        params:
        options: {
            success: function(logged_in, email, tenant, usertype) {},
            failure: function(errmsg) {},
            callback: function() {}
        }
    */
    checkLogin: function(options) {
        var me = this;
        Tools.Json.request({
            url: '/cfs/checklogin/',
            method: 'GET',
            success: function(response) {
                if (response['success']) {
                    if (response['logged_in']) {
                        me.email = response['email'];
                        me.tenant = response['tenant'];
                    }

                    if (options.success) {
                        options.success(response['logged_in'], response['email'], response['tenant'], response['usertype']);
                    }
                }
                else {
                    if (options.failure) {
                        options.failure(response['msg']);
                    }
                    else {
                        Tools.MsgBox.error(_('check_login_error'), response['msg']);
                    }
                }

                if (options.callback) {
                    options.callback(response);
                }
            }
        });
    },

    /*
        logout: delete session 
        callback(response)
    */
    // logout: function(callback) {
    //     Tools.Json.request({
    //         url: '/cfs/logout/',
    //         method: 'POST',
    //         success: callback
    //     });
    // }


    /*
        logout current user.
        params:
        options: {
            success: function() {},
            failure: function(errmsg) {},
            callback: function(response)
        }
    */
    logout: function(options) {
        var me = this;
        Tools.Json.request({
            url: '/cfs/logout/',
            method: 'POST',
            success: function(response) {
                if (response['success']) {
                    me.username = null;
                    if (options.success) {
                        options.success();
                    }
                }
                else {
                    if (options.failure) {
                        options.failure(response['msg']);
                    }
                    else {
                        Tools.MsgBox.error(_('logout_failed'), response['msg']);
                    }
                }
            }
        });
    }

});