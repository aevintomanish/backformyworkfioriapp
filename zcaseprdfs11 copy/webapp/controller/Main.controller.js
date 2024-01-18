sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.ibm.zcaseprdfs11.controller.Main", {

            onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("/model/Products.json");

                oModel.attachRequestCompleted(function () {
                    this.getView().setModel(oModel, "productsModel");
                }.bind(this));
            },
         
            onRowSelection: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("listItem");
                var oContext = oSelectedItem.getBindingContext("productsModel");
                if (oContext) {
                    var sPath = oContext.getObject().ProductID;
                    console.log(sPath);
                    var filData = this.getView().getModel("productsModel").getData()
                    let s = filData.find(p => p.ProductID === sPath)
                    var oModel = new sap.ui.model.json.JSONModel();
                    oModel.setData(s);
                    sap.ui.getCore().setModel(oModel, "myModel");
                    var Router = this.getOwnerComponent().getRouter()
                    Router.navTo("detail",false)                   
                } else {
                    console.error("No valid context found for navigation");
                }
            }
                });
    });
