class LoadingController extends BaseController {
    private loadingView:LoadingView;
    private loadingProxy:LoadingProxy;
    public constructor() {
        super();
        this.loadingProxy = new LoadingProxy(this);
        this.loadingView = new LoadingView(this, MainLayer.UI_Main);
        App.ViewManager.register(ViewConst.Loading, this.loadingView);

        this.addEventListener("123",this.on123);
        this.dispatchEvent("123",'456');
        this.removeEventListener("123",this.on123);
        this.dispatchEvent("123","567");

        var t = setTimeout(()=>{
            App.ViewManager.closeView(this.loadingView);
            App.ViewManager.open(ViewConst.GameView);
        },1000);
    }
    private on123 (arg):void {
        console.log(arg);
    }
}