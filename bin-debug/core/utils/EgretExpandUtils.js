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
/**
 * 引擎扩展类
 */
var EgretExpandUtils = (function (_super) {
    __extends(EgretExpandUtils, _super);
    /**
     * 构造函数
     */
    function EgretExpandUtils() {
        return _super.call(this) || this;
    }
    /**
     * 初始化函数
     */
    EgretExpandUtils.prototype.init = function () {
        AnchorUtil.init();
    };
    return EgretExpandUtils;
}(BaseClass));
__reflect(EgretExpandUtils.prototype, "EgretExpandUtils");
//# sourceMappingURL=EgretExpandUtils.js.map