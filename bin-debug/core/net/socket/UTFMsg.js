var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 */
var UTFMsg = (function () {
    /**
     * 构造函数
     */
    function UTFMsg() {
    }
    /**
     * 接收消息处理
     * @param msg
     */
    UTFMsg.prototype.receive = function (socket) {
        var msg = socket.readUTF();
        var obj = this.decode(msg);
        if (obj) {
            App.MessageCenter.dispatch(obj.key, obj.body);
        }
    };
    /**
     * 发送消息处理
     * @param msg
     */
    UTFMsg.prototype.send = function (socket, msg) {
        var obj = this.encode(msg);
        if (obj) {
            socket.type = egret.WebSocket.TYPE_STRING;
            socket.writeUTF(obj);
        }
    };
    /**
     * 消息解析
     * @param msg
     */
    UTFMsg.prototype.decode = function (msg) {
        Log.trace("decode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    /**
     * 消息封装
     * @param msg
     */
    UTFMsg.prototype.encode = function (msg) {
        Log.trace("encode需要子类重写，根据项目的协议结构解析");
        return null;
    };
    return UTFMsg;
}());
__reflect(UTFMsg.prototype, "UTFMsg", ["BaseMsg"]);
//# sourceMappingURL=UTFMsg.js.map