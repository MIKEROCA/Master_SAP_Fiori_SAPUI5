sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("mrocaj.SAPUI5.controller.HelloPanel", {
            onInit: function () {

            },
            onShowHello: function () {
                //read text i18n
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read data model
                let sRecipient = this.getView().getModel().getProperty("/recipient/name");
                let sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },

            onOpenDialog: function () {
                //se obtiene una instancia del componente y accede al mf openHelloDialog
                this.getOwnerComponent().openHelloDialog();
            },
        });
    });