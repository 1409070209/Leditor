import "./Menu.css";
// import "../font/iconfont.css";
import "./font/font.css"
import Bold from "./Bold/Bold";
import Html from "./Html/Html";
import FocusNode from "./FocusNode/FocusNode";
import Italic from "./Italic/Italic";
import FontSize from "./FontSize/FontSize";
import Undo from "../Undo/Undo";
import Redo from "../Redo/Redo";
/*
 * buttonList 的button列表要遵守唯一的接口规范
 * addInContainer(container:HtmlElement):bool 获取button的html element
 * construct(editor:LeiEditor,leiDocument:HTML5.js):<T> 注入该按钮所绑定的editor:LeiEditor类
 */

class Menu {
    leiEditor;
    document;
    buttonList;

    constructor(leiEditor, document) {
        this.leiEditor = leiEditor;
        this.document = document;
        this.buttonList = [];

        this.buttonListInit();
    }
    buttonListInit(){
        this.buttonList.push(new Bold(this.leiEditor,this.document));
        this.buttonList.push(new Italic(this.leiEditor,this.document));
        this.buttonList.push(new Html(this.leiEditor,this.document));
        this.buttonList.push(new FocusNode(this.leiEditor,this.document));
        this.buttonList.push(new FontSize(this.leiEditor,this.document));
        this.buttonList.push(new Undo(this.leiEditor,this.document));
        this.buttonList.push(new Redo(this.leiEditor,this.document));

    }
    getButtonList = () => this.buttonList
}
export default Menu;