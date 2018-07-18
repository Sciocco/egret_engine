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
var FrontController = (function (_super) {
    __extends(FrontController, _super);
    function FrontController() {
        var _this = _super.call(this) || this;
        _this.loadingProxy = new FrontProxy(_this);
        _this.loadingView = new FrontView(_this, MainLayer.UI_Main);
        App.ViewManager.register(ViewConst.Front, _this.loadingView);
        _this.addMessageListener("123", _this.on123);
        _this.dispatchMessage("123", '456');
        _this.removeMessageListener("123", _this.on123);
        _this.dispatchMessage("123", "567");
        var t = setTimeout(function () {
            App.ViewManager.closeView(_this.loadingView);
            App.ViewManager.open(ViewConst.GameView);
        }, 1000);
        return _this;
    }
    FrontController.prototype.on123 = function (arg) {
        console.log(arg);
    };
    return FrontController;
}(BaseController));
__reflect(FrontController.prototype, "FrontController");
//# sourceMappingURL=FrontController.js.map