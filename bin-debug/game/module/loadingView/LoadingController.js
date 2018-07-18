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
        _this.addEventListener("123", _this.on123);
        _this.dispatchEvent("123", '456');
        _this.removeEventListener("123", _this.on123);
        _this.dispatchEvent("123", "567");
        var t = setTimeout(function () {
            App.ViewManager.closeView(_this.loadingView);
            App.ViewManager.open(ViewConst.GameView);
        }, 1000);
        return _this;
    }
    LoadingController.prototype.on123 = function (arg) {
        console.log(arg);
    };
    return LoadingController;
}(BaseController));
__reflect(LoadingController.prototype, "LoadingController");
//# sourceMappingURL=LoadingController.js.map