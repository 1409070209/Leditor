import {strToElement} from "../../Util/domUtil";

class OutHistory {

    _button;
    _editor;
    _template = '<button><i class="icon-font icon-insert_tag_field"></i></button>';

    constructor(editor) {
        this._editor = editor;
    }
    eventListen() {

    }
    render(element) {
        this._button = strToElement(this._template)[0];
        this._button.onclick = (e)=>{
            this._editor.execCommand('outHistory');
        };
        element.appendChild(this._button);
    }
}

export default OutHistory;