import {strToElement} from "../../Util/domUtil";

class Html {
    _button;
    _editor;
    _template = '<button><i class="icon-font icon-HTML"></i></button>';

    constructor(editor) {
        this._editor = editor;
    }
    eventListen(e) {

    }
    render(element) {
        this._button = strToElement(this._template)[0];
        this._button.onclick = (e)=>{
            console.log(this._editor.getBody().innerHTML);
        };
        element.appendChild(this._button);
    }
}

export default Html;