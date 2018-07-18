class GameView extends BaseSpriteView {
    public constructor($controller:BaseController, $parent:egret.DisplayObjectContainer) {
        super($controller,$parent);
        this.init();
    }
    private init() {
        let txt:eui.Label = new eui.Label();
        txt.text = "game view";
        txt.x = 0;
        txt.y = 0;
        txt.textColor = 0x000000;
        this.addChild(txt);
    }
}