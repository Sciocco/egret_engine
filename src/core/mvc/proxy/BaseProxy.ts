/**
 * Proxy基类
 */
class BaseProxy {
    private _controller:BaseController;

    /**
     * 构造函数
     * @param $controller 所属模块
     */
    public constructor($controller:BaseController) {
        this._controller = $controller;
    }

    /**
     * 注册从服务器返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    public receiveServerMsg(key:any, callbackFunc:Function, callbackObj:any):void {
        App.MessageCenter.addListener(key, callbackFunc, callbackObj);
    }

    /**
     * 注册从服务器返回消息的监听，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    public receiveServerMsgOnce(key:any, callbackFunc:Function, callbackObj:any):void {
        var callback:Function = function(param:any):void {
            this.removeServerMsg(key, callback, this);
            callbackFunc.apply(callbackObj, param);
        }
        this.receiveServerMsg(key, callback, this);
    }

    /**
     * 注册从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    public receiveServerHttpUpdateMsg(key:any, callbackFunc:Function, callbackObj:any):void {
        this.receiveServerMsg(key + "_HttpUpdate", callbackFunc, callbackObj);
    }

    /**
     * 注册从Http服务端返回的Update消息，仅一次，执行完成后删除
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    public receiveServerHttpUpdateMsgOnce(key:any, callbackFunc:Function, callbackObj:any):void {
        this.receiveServerMsgOnce(key + "_HttpUpdate", callbackFunc, callbackObj);
    }

    /**
     * 移除服务端返回消息的监听
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    public removeServerMsg(key:any, callbackFunc:Function, callbackObj:any):void {
        App.MessageCenter.removeListener(key, callbackFunc, callbackObj);
    }

    /**
     * 移除从Http服务端返回的Update消息
     * @param key 消息标识
     * @param callbackFunc 处理函数
     * @param callbackObj 处理函数所属对象
     */
    public removeServerHttpUpdateMsg(key:any, callbackFunc:Function, callbackObj:any):void {
        this.removeServerMsg(key + "_HttpUpdate", callbackFunc, callbackObj);
    }

    /**
     * 发送消息到Socket服务器
     */
    public sendSocketMsg(msg:any):void {
        App.Socket.send(msg);
    }

    /**
     * 发送消息到Http服务端
     * @param type 消息标识 例如: User.login
     * @param paramObj 消息参数 例如: var paramObj:any = {"uName":uName, "uPass":uPass};
     */
    public sendHttpMsg(type:string, paramObj:any = null):void {
        App.Http.send(type, this.getURLVariables(type, paramObj));
    }

    /**
     * 将参数转换为URLVariables
     * @param t_type
     * @param t_paramObj
     * @returns {egret.URLVariables}
     */
    private getURLVariables(t_type:string, t_paramObj:any):egret.URLVariables {
        var typeArr:Array<any> = t_type.split(".");
        var paramObj:any = {};
        paramObj["mod"] = typeArr[0];
        paramObj["do"] = typeArr[1];
        if (t_paramObj != null) {
            paramObj["p"] = t_paramObj;
        }

        var param:string = JSON.stringify(paramObj);
        var variables:egret.URLVariables = new egret.URLVariables("data=" + param + "&h=" + App.ProxyUserFlag);
        return variables;
    }
        /**
     * 消息派发
     * @param type 消息id
     * @param ...param  消息携带的参数
     */
    public dispatchMessage(type:string,...param:any[]): void {
        App.NotificationCenter.dispatch(type,...param);
    }
    /**
     * 消息侦听
     * @param type 消息id
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     */
    public addMessageListener(type:string, listener:Function, listenerObj?:any):void {
        App.NotificationCenter.addListener(type,listener,listenerObj || this);
    }
    /**
     * 移除消息侦听
     * @param type 消息id
     * @param listener 侦听函数
     * @param listenerObj 侦听函数所属对象
     */
    public removeMessageListener(type:string, listener:Function, listenerObj?:any):void {
        App.NotificationCenter.removeListener(type,listener,listenerObj || this);
    }
}
