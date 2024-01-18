sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("com.ibm.zcaseprdfs11.controller.Detail", {
    onInit: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
    },

    _onObjectMatched: function (oEvent) {
      var sPath = "/" + oEvent.getParameter("arguments").productPath;
      this.getView().bindElement({
        path: sPath,
        model: "productsModel"
      });
    }
  });
});
