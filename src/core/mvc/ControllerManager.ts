/**
 * Controller管理类
 */
class ControllerManager extends BaseClass {
    private _modules:any;

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._modules = {};
    }

    /**
     * 清空处理
     */
    public clear():void {
        this._modules = {};
    }

    /**
     * 动态添加的Controller
     * @param key 唯一标识
     * @param manager Manager
     *
     */
    public register(key:number, control:BaseController):void {
        if (this.isExists(key))
            return;

        this._modules[key] = control;
    }

    /**
     * 动态移除Controller
     * @param key 唯一标识
     *
     */
    public unregister(key:number):void {
        if (!this.isExists(key))
            return;

        this._modules[key] = null;
        delete this._modules[key];
    }

    /**
     * 是否已经存在Controller
     * @param key 唯一标识
     * @return Boolean
     *
     */
    public isExists(key:number):boolean {
        return this._modules[key] != null;
    }


    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    public getControllerModel(controllerD:number):BaseModel {
        var manager:BaseController = this._modules[controllerD];
        if (manager) {
            return manager.getModel();
        }
        return null;
    }
}
