/**
 * View基类，继承自egret.Sprite
 */
class BaseSpriteView extends egret.DisplayObjectContainer implements IBaseView {
    private _controller:BaseController;
    private _myParent:egret.DisplayObjectContainer;
    private _isInit:boolean;
    private _resources:string[] = null;

    /**
     * 构造函数
     * @param $controller 所属模块
     * @param $parent 父级
     */
    public constructor($controller:BaseController, $parent:egret.DisplayObjectContainer) {
        super();
        this._controller = $controller;
        this._myParent = $parent;
        this._isInit = false;
        App.StageUtils.getStage().addEventListener(egret.Event.RESIZE, this.onResize, this);
    }

    /**
     * 设置初始加载资源
     * @param resources
     */
    public setResources(resources:string[]):void {
        this._resources = resources;
    }

    /**
     * 获取我的父级
     * @returns {egret.DisplayObjectContainer}
     */
    public get myParent():egret.DisplayObjectContainer {
        return this._myParent;
    }

    /**
     * 是否已经初始化
     * @returns {boolean}
     */
    public isInit():boolean {
        return this._isInit;
    }

    /**
     * 面板是否显示
     * @return
     *
     */
    public isShow():boolean {
        return this.stage != null && this.visible;
    }

    /**
     * 添加到父级
     */
    public addToParent():void {
        this._myParent.addChild(this);
    }

    /**
     * 从父级移除
     */
    public removeFromParent():void {
        App.DisplayUtils.removeFromParent(this);
    }

    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    public initUI():void {
        this._isInit = true;
    }

    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    public initData():void {

    }

    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    public open(...param:any[]):void {

    }

    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    public close(...param:any[]):void {

    }

    /**
     * 销毁
     */
    public destroy():void {
        this._controller = null;
        this._myParent = null;
        this._resources = null;
    }

    /**
     * 屏幕尺寸变化时调用
     */
    protected onResize():void {

    }

    /**
     * 加载面板所需资源
     * @param loadComplete
     * @param initComplete
     */
    public loadResource(loadComplete:Function, initComplete:Function):void {
        if (this._resources && this._resources.length > 0) {
            App.ResourceUtils.loadResource(this._resources, [], function ():void {
                loadComplete();
                initComplete();
            }, null, this);
        }
        else {
            loadComplete();
            initComplete();
        }
    }

    /**
     * 设置是否隐藏
     * @param value
     */
    public setVisible(value:boolean):void {
        this.visible = value;
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
