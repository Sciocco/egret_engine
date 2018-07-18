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
var GameModel = (function (_super) {
    __extends(GameModel, _super);
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function GameModel($controller) {
        return _super.call(this, $controller) || this;
    }
    return GameModel;
}(BaseModel));
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map