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
var GameViewController = (function (_super) {
    __extends(GameViewController, _super);
    function GameViewController() {
        var _this = _super.call(this) || this;
        _this.gameViewProxy = new GameViewProxy(_this);
        _this.gameView = new GameView(_this, MainLayer.Game_Main);
        App.ViewManager.register(ViewConst.GameView, _this.gameView);
        return _this;
    }
    return GameViewController;
}(BaseController));
__reflect(GameViewController.prototype, "GameViewController");
//# sourceMappingURL=GameViewController.js.map