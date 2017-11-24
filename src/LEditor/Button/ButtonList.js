import '../Button.css';
import '../Font/font.css';
import Blob from './Bold/Bold';
import {strToElement} from "../Util/domUtil";
import Html from "./Html/Html";
import Italic from "./Italic/Italic";
import Undo from "./Undo/Undo";
import Redo from "./Redo/Redo";
import OutHistory from "./OutHistort/OutHistory";
import Image from "./Image/Image";

class ButtonList {
    _editor;
    _buttonContainer;
    _buttonList = [];
    _buttonTemplate = '<li class="float-left"><div class="lei-button"></div></li>';

    constructor(editor , element){
        this._editor = editor;
        this._buttonContainer = element;
        this.createBefore();
        this.create();
    }
    createBefore() {
        this._buttonList.push(new Blob(this._editor));
        this._buttonList.push(new Html(this._editor));
        this._buttonList.push(new Italic(this._editor));
        this._buttonList.push(new Undo(this._editor));
        this._buttonList.push(new Redo(this._editor));
        this._buttonList.push(new OutHistory(this._editor));
        this._buttonList.push(new Image(this._editor));
    }
    create(){
        for (let i = 0; i < this._buttonList.length; i++) {
            let item = this._buttonList[i];
            const element = strToElement(this._buttonTemplate)[0];
            const div = element.getElementsByClassName('lei-button')[0];
            item.render(div);
            this._buttonContainer.appendChild(element);
        }
    }


}
export default ButtonList;