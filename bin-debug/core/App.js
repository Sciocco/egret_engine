var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "Http", {
        /**
         * Http请求
         * @type {Http}
         */
        get: function () {
            return Http.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "Socket", {
        /**
         * Socket请求
         * @type {null}
         */
        get: function () {
            return Socket.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ControllerManager", {
        /**
         * 模块管理类
         * @type {ControllerManager}
         */
        get: function () {
            return ControllerManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ViewManager", {
        /**
         * View管理类
         * @type {ViewManager}
         */
        get: function () {
            return ViewManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneManager", {
        /**
         * 场景管理类
         * @type {SceneManager}
         */
        get: function () {
            return SceneManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DebugUtils", {
        /**
         * 调试工具
         * @type {DebugUtils}
         */
        get: function () {
            return DebugUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MessageCenter", {
        /**
         * 服务器返回的消息处理中心
         * @type {MessageCenter}
         */
        get: function () {
            return MessageCenter.getInstance(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TimerManager", {
        /**
         * 统一的计时器和帧刷管理类
         * @type {TimerManager}
         */
        get: function () {
            return TimerManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DateUtils", {
        /**
         * 日期工具类
         * @type {DateUtils}
         */
        get: function () {
            return DateUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MathUtils", {
        /**
         * 数学计算工具类
         * @type {MathUtils}
         */
        get: function () {
            return MathUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RandomUtils", {
        /**
         * 随机数工具类
         * @type {RandomUtils}
         */
        get: function () {
            return RandomUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DisplayUtils", {
        /**
         * 显示对象工具类
         * @type {DisplayUtils}
         */
        get: function () {
            return DisplayUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "BitmapNumber", {
        /*
         * 图片合成数字工具类
         * */
        get: function () {
            return BitmapNumber.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "GuideUtils", {
        /**
         * 引导工具类
         */
        get: function () {
            return GuideUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtils", {
        /**
         * Stage操作相关工具类
         */
        get: function () {
            return StageUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EffectUtils", {
        /**
         * Effect工具类
         */
        get: function () {
            return EffectUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StringUtils", {
        /**
         * 字符串工具类
         */
        get: function () {
            return StringUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "CommonUtils", {
        /**
         * 通过工具类
         */
        get: function () {
            return CommonUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SoundManager", {
        /**
         * 音乐管理类
         */
        get: function () {
            return SoundManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DeviceUtils", {
        /**
         * 设备工具类
         */
        get: function () {
            return DeviceUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EgretExpandUtils", {
        /**
         * 引擎扩展类
         */
        get: function () {
            return EgretExpandUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "KeyboardUtils", {
        /**
         * 键盘操作工具类
         */
        get: function () {
            return KeyboardUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RockerUtils", {
        /**
         * 摇杆操作工具类
         */
        get: function () {
            return RockerUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ShockUtils", {
        /**
         * 震动类
         */
        get: function () {
            return ShockUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResourceUtils", {
        /**
         * 资源加载工具类
         */
        get: function () {
            return ResourceUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RenderTextureManager", {
        /**
         * RenderTextureManager
         */
        get: function () {
            return RenderTextureManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TextFlowMaker", {
        /**
         * TextFlow
         */
        get: function () {
            return TextFlowMaker.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "NotificationCenter", {
        get: function () {
            if (App._notificationCenter == null) {
                App._notificationCenter = new MessageCenter(1);
            }
            return App._notificationCenter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DelayOptManager", {
        /**
         * 分帧处理类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return DelayOptManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ArrayUtils", {
        /**
         * 数组工具类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return ArrayUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EasyLoading", {
        /**
         * 通用Loading动画
         * @returns {any}
         * @constructor
         */
        get: function () {
            return EasyLoading.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DragonBonesFactory", {
        /**
         * DragonBones工厂类
         * @returns {any}
         * @constructor
         */
        get: function () {
            return DragonBonesFactory.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StarlingSwfFactory", {
        /**
         * StarlingSwf工厂类
         * @returns {StarlingSwfFactory}
         * @constructor
         */
        get: function () {
            return StarlingSwfFactory.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化函数
     * @constructor
     */
    App.Init = function () {
        console.log("当前引擎版本: ", egret.Capabilities.engineVersion);
        //全局配置数据
        App.GlobalData = RES.getRes("global");
        //开启调试
        App.DebugUtils.isOpen(App.GlobalData.IsDebug);
        App.DebugUtils.setThreshold(5);
        //扩展功能初始化
        App.EgretExpandUtils.init();
        //实例化Http请求
        App.Http.initServer(App.GlobalData.HttpSerever);
        //实例化ProtoBuf和Socket请求
        App.ProtoConfig = RES.getRes(App.GlobalData.ProtoConfig);
        App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort, new ByteArrayMsgByProtobuf());
    };
    /**
     * 请求服务器使用的用户标识
     * @type {string}
     */
    App.ProxyUserFlag = "";
    /**
     * 全局配置数据
     * @type {null}
     */
    App.GlobalData = null;
    /**
     * ProtoConfig
     * @type {null}
     */
    App.ProtoConfig = null;
    return App;
}());
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map