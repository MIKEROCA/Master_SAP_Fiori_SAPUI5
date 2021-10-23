// @ts-nocheck
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.base.ManagedObject"} ManagedObject
     * @param {typeof sap.ui.core.Fragment} Fragment 
     */
    function (ManagedObject, Fragment) {
        "use strict";

        return ManagedObject.extend("mrocaj.SAPUI5.controller.HelloDialog", {

            constructor: function (oView) {
                this._oView = oView;
            },

            exit: function () {
                delete this._oView;
            },

            open: function () {
                //se obtiene la instancia de la vista
                const oView = this._oView;

                //si no esta cargado el dialogo
                if (!oView.byId("helloDialog")) {

                    //se crea dialogo (lazily)
                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        }                        
                    }
                    //se carga el dialogo asincrono
                    Fragment.load({
                        id: oView.getId(),
                        name: "mrocaj.SAPUI5.view.HelloDialog",
                        //instancia del controlador de la vista
                        controller: oFragmentController
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    //se abre el dialogo ya cargado
                    oView.byId("helloDialog").open();
                }
            }
        });
    });