/**
 * Model基类
 */
class BaseModel {
    private _controller:BaseController;

    /**
     * 构造函数
     * @param $controller 所属模块
     */
    public constructor($controller:BaseController) {
        this._controller = $controller;
        this._controller.setModel(this);
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
