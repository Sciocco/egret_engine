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
var LoadingView = (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView($controller, $parent) {
        var _this = _super.call(this, $controller, $parent) || this;
        _this.init();
        return _this;
    }
    LoadingView.prototype.init = function () {
        var txt = new eui.Label();
        txt.text = "mvc test";
        txt.x = 0;
        txt.y = 0;
        txt.textColor = 0x000000;
        this.addChild(txt);
    };
    return LoadingView;
}(BaseSpriteView));
__reflect(LoadingView.prototype, "LoadingView");
//# sourceMappingURL=LoadingView.js.map