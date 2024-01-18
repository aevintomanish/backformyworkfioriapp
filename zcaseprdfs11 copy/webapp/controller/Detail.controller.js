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
          let oModel2 = sap.ui.getCore().getModel("myModel");
          this.getView().setModel(oModel2, 'productModel')
          this.getOwnerComponent().getRouter().attachRouteMatched(this.onobj, this);
           },
  
        onobj: function (oEvent) {
          let oModel2 = sap.ui.getCore().getModel("myModel");
  
          this.getView().setModel(oModel2, 'productModel')
          this.getOwnerComponent().getRouter("detail").attachRouteMatched(this.onobj, this);
        }
   });
    });
  