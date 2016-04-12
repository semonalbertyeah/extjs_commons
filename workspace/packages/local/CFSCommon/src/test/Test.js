/*
     A test window.
*/
Ext.define('CFSCommon.test.Test', {
    extend: 'Ext.window.Window',
    xtype: 'test-main',

    requires: [
        'CFSCommon.test.FileUpload'
    ],
    title: 'Test Window',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    hight: 200,
    width: 400,
    scrollable: true,
    items: [{
        xtype: 'test-fileupload'
    }]
});