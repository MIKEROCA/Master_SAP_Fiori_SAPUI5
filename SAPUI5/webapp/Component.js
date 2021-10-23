sap.ui.define([
    "sap/ui/core/UIComponent",
    "mrocaj/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel, HelloDialog) {
        "use strict";

        return UIComponent.extend("mrocaj.SAPUI5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                //call init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //set data model
                this.setModel(Models.createRecipient());

                //set i18n
                let i18nModel = new ResourceModel({ bundleName: "mrocaj.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

                //Se recupera el controlador del dialogo
                this._helloDialog = new HelloDialog(this.getRootControl());                
            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            }
        });
    });   