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
 * Armature封装类
 */
var DragonBonesArmature = (function (_super) {
    __extends(DragonBonesArmature, _super);
    /**
     * 构造函数
     * @param armature dragonBones.Armature
     * @param clock dragonBones.WorldClock
     */
    function DragonBonesArmature(armature, clock) {
        var _this = _super.call(this) || this;
        _this._armature = armature;
        _this._clock = clock;
        _this.addChild(_this._armature.display);
        _this._completeCalls = [];
        _this._frameCalls = [];
        _this._isPlay = false;
        _this._playName = "";
        return _this;
    }
    /**
     * 添加事件监听
     */
    DragonBonesArmature.prototype.addListeners = function () {
        this._armature.eventDispatcher.addEvent(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
        this._armature.eventDispatcher.addEvent(dragonBones.EventObject.FRAME_EVENT, this.frameHandler, this);
    };
    /**
     * 移除事件监听
     */
    DragonBonesArmature.prototype.removeListeners = function () {
        this._armature.eventDispatcher.removeEvent(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
        this._armature.eventDispatcher.removeEvent(dragonBones.EventObject.FRAME_EVENT, this.frameHandler, this);
    };
    /**
     * 事件完成执行函数
     * @param e
     */
    DragonBonesArmature.prototype.completeHandler = function (e) {
        var animationName = e.eventObject.animationState.name;
        for (var i = 0, len = this._completeCalls.length; i < len; i++) {
            var arr = this._completeCalls[i];
            arr[0].apply(arr[1], [e, animationName]);
        }
        if (animationName == this._playName) {
            this._playName = "";
        }
    };
    /**
     * 帧事件处理函数
     * @param e
     */
    DragonBonesArmature.prototype.frameHandler = function (e) {
        for (var i = 0, len = this._frameCalls.length; i < len; i++) {
            var arr = this._frameCalls[i];
            arr[0].apply(arr[1], [e]);
        }
    };
    /**
     * 播放名为name的动作
     * @param name 名称
     * @param playNum 指定播放次数，默认走动画配置
     */
    DragonBonesArmature.prototype.play = function (name, playNum) {
        if (playNum === void 0) { playNum = undefined; }
        if (this._playName == name) {
            return this._currAnimationState;
        }
        this._playName = name;
        this.start();
        if (playNum == undefined) {
            this._currAnimationState = this.getAnimation().play(name);
        }
        else {
            this._currAnimationState = this.getAnimation().play(name, playNum);
        }
        return this._currAnimationState;
    };
    /**
     * 恢复播放
     */
    DragonBonesArmature.prototype.start = function () {
        if (!this._isPlay) {
            this._clock.add(this._armature);
            this._isPlay = true;
            this.addListeners();
        }
    };
    /**
     * 停止播放
     */
    DragonBonesArmature.prototype.stop = function () {
        if (this._isPlay) {
            this._clock.remove(this._armature);
            this._isPlay = false;
            this._playName = "";
            this.removeListeners();
        }
    };
    /**
     * 销毁
     */
    DragonBonesArmature.prototype.destroy = function () {
        this.stop();
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.removeChildren();
        this._armature = null;
        this._clock = null;
        this._completeCalls = null;
        this._frameCalls = null;
    };
    /**
     * 添加动画完成函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.addCompleteCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._completeCalls.length; i++) {
            var arr = this._completeCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                return;
            }
        }
        this._completeCalls.unshift([callFunc, target]);
    };
    /**
     * 移除一个动画完成函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.removeCompleteCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._completeCalls.length; i++) {
            var arr = this._completeCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                this._completeCalls.splice(i, 1);
                i--;
            }
        }
    };
    /**
     * 添加帧事件处理函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.addFrameCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._frameCalls.length; i++) {
            var arr = this._frameCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                return;
            }
        }
        this._frameCalls.push([callFunc, target]);
    };
    /**
     * 移除帧事件处理函数
     * @param callFunc 函数
     * @param target 函数所属对象
     */
    DragonBonesArmature.prototype.removeFrameCallFunc = function (callFunc, target) {
        for (var i = 0; i < this._frameCalls.length; i++) {
            var arr = this._frameCalls[i];
            if (arr[0] == callFunc && arr[1] == target) {
                this._frameCalls.splice(i, 1);
                i--;
            }
        }
    };
    /**
     * 移除舞台处理
     * @private
     */
    DragonBonesArmature.prototype.$onRemoveFromStage = function () {
        _super.prototype.$onRemoveFromStage.call(this);
        this.stop();
    };
    /**
     * 获取dragonBones.Armature
     * @returns {dragonBones.Armature}
     */
    DragonBonesArmature.prototype.getArmature = function () {
        return this._armature;
    };
    /**
     * 获取当前dragonBones.AnimationState
     * @returns {dragonBones.AnimationState}
     */
    DragonBonesArmature.prototype.getCurrAnimationState = function () {
        return this._currAnimationState;
    };
    /**
     * 获取所属dragonBones.WorldClock
     * @returns {dragonBones.WorldClock}
     */
    DragonBonesArmature.prototype.getClock = function () {
        return this._clock;
    };
    /**
     * 获取dragonBones.Animation
     * @returns {Animation}
     */
    DragonBonesArmature.prototype.getAnimation = function () {
        return this._armature.animation;
    };
    /**
     * 获取一个dragonBones.Bone
     * @param boneName
     * @returns {dragonBones.Bone}
     */
    DragonBonesArmature.prototype.getBone = function (boneName) {
        return this._armature.getBone(boneName);
    };
    /**
     * 当前正在播放的动作名字
     * @returns {string}
     */
    DragonBonesArmature.prototype.getPlayName = function () {
        return this._playName;
    };
    /**
     * 获取骨骼的display
     * @param bone
     * @returns {function(): any}
     */
    DragonBonesArmature.prototype.getBoneDisplay = function (bone) {
        return bone.slot.display;
    };
    /**
     * 替换骨骼插件
     * @param boneName
     * @param displayObject
     */
    DragonBonesArmature.prototype.changeBone = function (boneName, displayObject) {
        var bone = this.getBone(boneName);
        if (bone) {
            bone.slot.setDisplay(displayObject);
        }
    };
    return DragonBonesArmature;
}(egret.DisplayObjectContainer));
__reflect(DragonBonesArmature.prototype, "DragonBonesArmature");
//# sourceMappingURL=DragonBonesArmature.js.map