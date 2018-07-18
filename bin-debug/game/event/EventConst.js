var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventConst = (function () {
    function EventConst() {
    }
    /**
     * 初始化完成
     */
    EventConst.INIT_COMPLETE = "init_complete";
    return EventConst;
}());
__reflect(EventConst.prototype, "EventConst");
//# sourceMappingURL=EventConst.js.map