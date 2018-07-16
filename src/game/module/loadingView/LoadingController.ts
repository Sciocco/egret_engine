class LoadingController extends BaseController {
    private loadingView:LoadingView;
    private loadingProxy:LoadingProxy;
    public constructor() {
        super();
        this.loadingProxy = new LoadingProxy(this);
        this.loadingView = new LoadingView(this, MainLayer.UI_Main);
        App.ViewManager.register(ViewConst.Loading, this.loadingView);
    }
}