var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MainLayer = (function () {
    function MainLayer() {
    }
    /**
     * 游戏背景层
     * @type {BaseSpriteLayer}
     */
    MainLayer.Game_Bg = new BaseSpriteLayer();
    /**
     * 主游戏层
     * @type {BaseSpriteLayer}
     */
    MainLayer.Game_Main = new BaseSpriteLayer();
    /**
     * UI主界面
     * @type {BaseEuiLayer}
     */
    MainLayer.UI_Main = new BaseEuiLayer();
    /**
     * UI弹出框层
     * @type {BaseEuiLayer}
     */
    MainLayer.UI_Popup = new BaseEuiLayer();
    /**
     * UI警告消息层
     * @type {BaseEuiLayer}
     */
    MainLayer.UI_Message = new BaseEuiLayer();
    /**
     * UITips层
     * @type {BaseEuiLayer}
     */
    MainLayer.UI_Tips = new BaseEuiLayer();
    return MainLayer;
}());
__reflect(MainLayer.prototype, "MainLayer");
//# sourceMappingURL=MainLayer.js.map