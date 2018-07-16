var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * StringBuffer类
 */
var StringBuffer = (function () {
    /**
     * 构造函数
     */
    function StringBuffer() {
        this._strings = new Array();
    }
    /**
     * 追加一个字符串
     * @param str
     */
    StringBuffer.prototype.append = function (str) {
        this._strings.push(str);
    };
    /**
     * 转换为字符串
     * @returns {string}
     */
    StringBuffer.prototype.toString = function () {
        return this._strings.join("");
    };
    /**
     * 清空
     */
    StringBuffer.prototype.clear = function () {
        this._strings.length = 0;
    };
    return StringBuffer;
}());
__reflect(StringBuffer.prototype, "StringBuffer");
//# sourceMappingURL=StringBuffer.js.map