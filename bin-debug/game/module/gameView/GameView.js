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
var GameView = (function (_super) {
    __extends(GameView, _super);
    function GameView($controller, $parent) {
        var _this = _super.call(this, $controller, $parent) || this;
        _this.init();
        return _this;
    }
    GameView.prototype.init = function () {
        var txt = new eui.Label();
        txt.text = "game view";
        txt.x = 0;
        txt.y = 0;
        txt.textColor = 0x000000;
        this.addChild(txt);
    };
    return GameView;
}(BaseSpriteView));
__reflect(GameView.prototype, "GameView");
//# sourceMappingURL=GameView.js.map