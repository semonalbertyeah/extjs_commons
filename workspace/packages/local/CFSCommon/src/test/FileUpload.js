/*
     A test window.
*/
Ext.define('CFSCommon.test.FileUpload', {
    extend: 'Ext.form.Panel',
    xtype: 'test-fileupload',

    requires: [
        'Ext.form.field.File',

        'Tools.MsgBox'
    ],

    title: 'Upload File',
    bodyPadding: 5,

    // The form will submit an AJAX request to this URL when submitted
    url: '/cfs/test_upload_file/',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    items: [{
        xtype: 'fileuploadfield',
        fieldLabel: 'First Name',
        name: 'test_file',
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        formBind: true, //only enabled once the form is valid
        disabled: true,
        handler: function() {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    // success: function(form, action) {
                    //     // Ext.Msg.alert('Success', action.result.msg);
                    //     Tools.MsgBox.error('Success', action.result.msg);
                    // },
                    failure: function(form, action) {
                        // Ext.Msg.alert('Failed', action.result.msg);
                        Tools.MsgBox.error('Failed', action.result.msg);
                    }
                });
            }
        }
    }]
});