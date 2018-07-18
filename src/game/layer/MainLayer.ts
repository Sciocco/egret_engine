class MainLayer{
    /**
     * 游戏背景层
     * @type {BaseSpriteLayer}
     */
    public static Game_Bg:BaseSpriteLayer = new BaseSpriteLayer();
    /**
     * 主游戏层
     * @type {BaseSpriteLayer}
     */
    public static Game_Main:BaseSpriteLayer = new BaseSpriteLayer();

    /**
     * UI主界面
     * @type {BaseEuiLayer}
     */
    public static UI_Main:BaseEuiLayer = new BaseEuiLayer();
    /**
     * UI 小地图
     * @type {BaseEuiLayer}
     */
    public static UI_MiniMap:BaseEuiLayer = new BaseEuiLayer();

    /**
     * UI弹出框层
     * @type {BaseEuiLayer}
     */
    public static UI_Popup:BaseEuiLayer = new BaseEuiLayer();
    /**
     * UI警告消息层
     * @type {BaseEuiLayer}
     */
    public static UI_Message:BaseEuiLayer = new BaseEuiLayer();
    /**
     * UITips层
     * @type {BaseEuiLayer}
     */
    public static UI_Tips:BaseEuiLayer = new BaseEuiLayer();
}