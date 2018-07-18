var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Model基类
 */
var BaseModel = (function () {
    /**
     * 构造函数
     * @param $controller 所属模块
     */
    function BaseModel($controller) {
        this._controller = $controller;
        this._controller.setModel(this);
    }
    /**
 * 消息派发
 * @param type 消息id
 * @param ...param  消息携带的参数
 */
    BaseModel.prototype.dispatchMessage = function (type) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        (_a = App.NotificationCenter).dispatch.apply(_a, [type].concat(param));
        var _a;
    };
    /**
     * 消息侦听
     * @param type 消息id
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     */
    BaseModel.prototype.addMessageListener = function (type, listener, listenerObj) {
        App.NotificationCenter.addListener(type, listener, listenerObj || this);
    };
    /**
     * 移除消息侦听
     * @param type 消息id
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     */
    BaseModel.prototype.removeMessageListener = function (type, listener, listenerObj) {
        App.NotificationCenter.removeListener(type, listener, listenerObj || this);
    };
    return BaseModel;
}());
__reflect(BaseModel.prototype, "BaseModel");
//# sourceMappingURL=BaseModel.js.map