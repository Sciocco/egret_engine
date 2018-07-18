class GameViewController extends BaseController {
    private gameView:GameView;
    private gameViewProxy:GameViewProxy;
    public constructor() {
        super();
        this.gameViewProxy = new GameViewProxy(this);
        this.gameView = new GameView(this, MainLayer.Game_Main);
        App.ViewManager.register(ViewConst.GameView,this.gameView);
    }
}