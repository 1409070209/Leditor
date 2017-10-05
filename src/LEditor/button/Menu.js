import "./Menu.css";
// import "../font/iconfont.css";
import "./font/font.css"
import Bold from "./Bold/Bold";
import Html from "./Html/Html";
import FocusNode from "./FocusNode/FocusNode";
import Italic from "./Italic/Italic";
import FontSize from "./Title/Title";
import Undo from "./Undo/Undo";
import Redo from "./Redo/Redo";
/*
 * _buttonList 的button列表要遵守唯一的接口规范
 * addInContainer(container:HtmlElement):bool 获取button的html element
 * construct(editor:LeiEditor,leiDocument:HTML5.js):<T> 注入该按钮所绑定的editor:LeiEditor类
 */

class Menu {
    leiEditor;
    document;
    _buttonList;
    _eventListenList;

    constructor(leiEditor, document) {
        this.leiEditor = leiEditor;
        this.document = document;
        this._buttonList = [];
        this._eventListenList = [];
        this.buttonListInit();
    }
    _addButton(button) {
        this._buttonList.push(button);
        // console.log(button.configEventListen);
        if (typeof button.configEventListen !== 'undefined') {
            const eventImpl = button.configEventListen();
            if (eventImpl !== null && typeof eventImpl === 'object') {
                this._eventListenList.push(eventImpl);
            }
        }
    }
    buttonListInit(){
        this._addButton(new Bold(this.leiEditor,this.document));
        this._addButton(new Italic(this.leiEditor,this.document));
        this._addButton(new Html(this.leiEditor,this.document));
        this._addButton(new FocusNode(this.leiEditor,this.document));
        this._addButton(new FontSize(this.leiEditor,this.document));
        this._addButton(new Undo(this.leiEditor,this.document));
        this._addButton(new Redo(this.leiEditor,this.document));
    }
    getButtonList = () => this._buttonList;
    getEventListen = () => this._eventListenList;
}
export default Menu;