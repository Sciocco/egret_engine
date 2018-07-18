class GameViewController extends BaseController {
    private gameView:GameView;
    private gameViewProxy:GameViewProxy;
    private gameModel:GameModel;
    public constructor() {
        super();
        this.gameModel = new GameModel(this);
        this.gameViewProxy = new GameViewProxy(this);
        this.gameView = new GameView(this, MainLayer.Game_Main);
        App.ViewManager.register(ViewConst.GameView,this.gameView);
    }
}