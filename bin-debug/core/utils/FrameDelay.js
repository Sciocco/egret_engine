var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 帧延迟处理
 */
var FrameDelay = (function () {
    /**
     * 构造函数
     */
    function FrameDelay() {
    }
    /**
     * 延迟处理
     * @param delayFrame 延迟帧数
     * @param func 延迟执行的函数
     * @param thisObj 延迟执行的函数的所属对象
     */
    FrameDelay.prototype.delayCall = function (delayFrame, func, thisObj) {
        this.func = func;
        this.thisObj = thisObj;
        egret.callLater(function () {
            App.TimerManager.doFrame(delayFrame, 1, this.listener_enterFrame, this);
        }, this);
    };
    FrameDelay.prototype.listener_enterFrame = function () {
        this.func.call(this.thisObj);
    };
    return FrameDelay;
}());
__reflect(FrameDelay.prototype, "FrameDelay");
//# sourceMappingURL=FrameDelay.js.map