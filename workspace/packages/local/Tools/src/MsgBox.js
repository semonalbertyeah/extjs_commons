Ext.define('Tools.MsgBox', {
    requires: ['Ext.MessageBox'],
    singleton: true,

    error: function(title, msg) {
        Ext.MessageBox.show({
            buttons: Ext.MessageBox.CANCEL,
            icon: Ext.MessageBox.WARNING,
            message: msg,
            title: title
        });
    },
    fatalError: function(title, msg) {
        Ext.MessageBox.show({
            buttons: Ext.MessageBox.CANCEL,
            icon: Ext.MessageBox.ERROR,
            message: msg,
            title: title
        });
    }
});