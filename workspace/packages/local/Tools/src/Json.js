Ext.define('Tools.Json', {
    singleton: true,
    requires: ['Ext.Ajax', 'Tools.MsgBox'],

    /*
        Ajax request. sending and receiving json data.
        options:
            url, method, jsonData
            success(response)    -> decoded json data
            failure(status, responseText)
    */
    request: function(options) {
        Ext.Ajax.request({
            url: options.url,
            method: options.method,
            jsonData: options.jsonData,
            callback: function (opts, success, response) {
                if (success) {
                    var responseData;
                    try {
                        responseData = Ext.JSON.decode(response.responseText);
                    }
                    catch(e) {
                        responseData = response.responseText;
                    }

                    if (options.success) {
                        options.success(responseData);
                    }
                }
                else {/* http error */
                    if (options.failure) {
                        optins.failure(status, response.responseText)
                    }
                    else {
                        // Ext.MessageBox.show({
                        //     buttons: Ext.MessageBox.CANCEL,
                        //     icon: Ext.MessageBox.ERROR,
                        //     message: response.responseText,
                        //     title: String(response.status)
                        // });
                        Tools.MsgBox.fatalError(String(response.status), response.responseText);
                    }
                }
            }
        });
    }
});