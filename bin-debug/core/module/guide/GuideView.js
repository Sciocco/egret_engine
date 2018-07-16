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
 * GuideView
 */
var GuideView = (function (_super) {
    __extends(GuideView, _super);
    /**
     * 构造函数
     */
    function GuideView() {
        var _this = _super.call(this) || this;
        _this._objRec = new egret.Rectangle();
        _this._objGlobalPoint = new egret.Point();
        _this._bg = new GuideMaskBackgroud();
        _this.addChild(_this._bg);
        _this._maskPic = StarlingSwfUtils.createS9Image("s9_guide_mask");
        _this.addChild(_this._maskPic);
        _this._textBgPic = StarlingSwfUtils.createS9Image("s9_guide_txt");
        AnchorUtil.setAnchorY(_this._textBgPic, 1);
        _this.addChild(_this._textBgPic);
        _this._handPic = StarlingSwfUtils.createImage("img_hand");
        AnchorUtil.setAnchorX(_this._handPic, 0.5);
        _this.addChild(_this._handPic);
        _this._txt = new egret.TextField();
        _this._txt.size = 26;
        _this._txt.textColor = 0x575757;
        _this._txt.lineSpacing = 4;
        AnchorUtil.setAnchorY(_this._txt, 0.5);
        _this.addChild(_this._txt);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, _this.onResize, _this);
        return _this;
    }
    /**
     * 屏幕大小改变时重置
     */
    GuideView.prototype.onResize = function () {
        if (this.stage) {
            egret.setTimeout(this.refurbish, this, 500);
        }
    };
    /**
     * 刷新
     */
    GuideView.prototype.refurbish = function () {
        this.setData(this._obj, this._data);
    };
    /**
     * 设置显示数据
     * @param obj
     * @param data
     */
    GuideView.prototype.setData = function (obj, data) {
        if (obj == null) {
            return;
        }
        this._obj = obj;
        this._data = data;
        this._obj.localToGlobal(0, 0, this._objGlobalPoint);
        this._obj.getBounds(this._objRec);
        this._objGlobalPoint.x = Math.ceil(this._objGlobalPoint.x);
        this._objGlobalPoint.y = Math.ceil(this._objGlobalPoint.y);
        var tmpX = 15;
        var tmpy = 15;
        this._objRec.x = this._objGlobalPoint.x - tmpX;
        this._objRec.y = this._objGlobalPoint.y - tmpy;
        this._objRec.width += tmpX * 2;
        this._objRec.height += tmpy * 2;
        //不透明区域
        this._bg.init(egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight);
        this._bg.draw(this._objRec);
        //透明区域
        this._maskPic.cacheAsBitmap = false;
        this._maskPic.x = this._objRec.x;
        this._maskPic.y = this._objRec.y;
        this._maskPic.width = this._objRec.width;
        this._maskPic.height = this._objRec.height;
        this._maskPic.cacheAsBitmap = true;
        //handDir  1:下面 2:上面
        if (this._data.handDir == 1) {
            this._handPic.scaleY = 1;
            this._handPic.y = this._objRec.y + this._objRec.height - 20;
        }
        else if (this._data.handDir == 2) {
            this._handPic.scaleY = -1;
            this._handPic.y = this._objRec.y + 20;
        }
        this._handPic.x = this._objRec.x + this._objRec.width * 0.5;
        //文字显示
        this._txt.width = NaN;
        this._txt.height = NaN;
        this._txt.text = this._data.txt;
        if (this._txt.width > 320) {
            this._txt.text = "";
            this._txt.width = 320;
            this._txt.text = this._data.txt;
        }
        var temp = 15;
        this._textBgPic.cacheAsBitmap = false;
        this._textBgPic.width = this._txt.width + temp * 2 + 35;
        this._textBgPic.height = 114;
        //txtdir  箭头指向: 1:背景左箭头下 2:背景左箭头上 3:背景右箭头下 4:背景右箭头上
        if (this._data.txtdir == 1) {
            this._textBgPic.scaleX = -1;
            this._textBgPic.scaleY = 1;
            this._textBgPic.x = this._objRec.x;
        }
        else if (this._data.txtdir == 2) {
            this._textBgPic.scaleX = -1;
            this._textBgPic.scaleY = -1;
            this._textBgPic.x = this._objRec.x;
        }
        else if (this._data.txtdir == 3) {
            this._textBgPic.scaleX = 1;
            this._textBgPic.scaleY = 1;
            this._textBgPic.x = this._objRec.x + this._objRec.width;
        }
        else if (this._data.txtdir == 4) {
            this._textBgPic.scaleX = 1;
            this._textBgPic.scaleY = -1;
            this._textBgPic.x = this._objRec.x + this._objRec.width;
        }
        this.checkTextBgX();
        this._textBgPic.y = this._objRec.y + this._objRec.height * 0.5;
        this._txt.x = this._textBgPic.x - (this._textBgPic.scaleX == -1 ? this._textBgPic.width : -35) + temp;
        this._txt.y = this._textBgPic.y - this._textBgPic.scaleY * this._textBgPic.height * 0.5;
        this._textBgPic.cacheAsBitmap = true;
    };
    /**
     * 检测文本提示框是否出了边界
     */
    GuideView.prototype.checkTextBgX = function () {
        if (this._textBgPic.scaleX == 1) {
            var stageW = egret.MainContext.instance.stage.stageWidth;
            if (this._textBgPic.x + this._textBgPic.width > stageW) {
                this._textBgPic.x = stageW - this._textBgPic.width;
            }
        }
        else if (this._textBgPic.scaleX == -1) {
            if (this._textBgPic.x - this._textBgPic.width < 0) {
                this._textBgPic.x = this._textBgPic.width;
            }
        }
    };
    return GuideView;
}(egret.Sprite));
__reflect(GuideView.prototype, "GuideView");
//# sourceMappingURL=GuideView.js.map