/**
 * Controller基类
 */
class BaseController {
    /**
     * 消息列表
     */
    private _messages:any;

    /**
     * 该模块使用的实体类
     */
    private _model:BaseModel;

    /**
     * 构造函数
     */
    public constructor() {
        this._messages = {};
    }

    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    public registerFunc(key:any, callbackFunc:Function, callbackObj:any):void {
        this._messages[key] = [callbackFunc, callbackObj];
    }


    /**
     * 设置该模块使用的Model对象
     * @param model
     */
    public setModel(model:BaseModel):void {
        this._model = model;
    }

    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    public getModel():BaseModel {
        return this._model;
    }

    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    public getControllerModel(controllerD:number):BaseModel {
        return App.ControllerManager.getControllerModel(controllerD);
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
