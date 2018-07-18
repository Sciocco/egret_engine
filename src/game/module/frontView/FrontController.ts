class FrontController extends BaseController {
    private loadingView:FrontView;
    private loadingProxy:FrontProxy;
    public constructor() {
        super();
        this.loadingProxy = new FrontProxy(this);
        this.loadingView = new FrontView(this, MainLayer.UI_Main);
        App.ViewManager.register(ViewConst.Front, this.loadingView);

        this.addMessageListener("123",this.on123);
        this.dispatchMessage("123",'456');
        this.removeMessageListener("123",this.on123);
        this.dispatchMessage("123","567");

        var t = setTimeout(()=>{
            App.ViewManager.closeView(this.loadingView);
            App.ViewManager.open(ViewConst.GameView);
        },1000);
    }
    private on123 (arg):void {
        console.log(arg);
    }
}