var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoadingController = (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        var _this = _super.call(this) || this;
        _this.loadingProxy = new LoadingProxy(_this);
        _this.loadingView = new LoadingView(_this, MainLayer.UI_Main);
        App.ViewManager.register(ViewConst.Loading, _this.loadingView);
        return _this;
    }
    return LoadingController;
}(BaseController));
__reflect(LoadingController.prototype, "LoadingController");
//# sourceMappingURL=LoadingController.js.map