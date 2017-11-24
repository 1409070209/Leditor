import {strToElement} from "../../Util/domUtil";

class Image {
    _button;
    _editor;
    _template = '<button><i class="icon-font icon-image"></i></button>';

    constructor(editor) {
        this._editor = editor;
    }
    eventListen() {

    }
    render(element) {
        this._button = strToElement(this._template)[0];
        this._button.onclick = (e) => {
            this._editor.execCommand('insertHTML' , '<p><img src="https://github.com/fluidicon.png" alt="图片加载失败"/></p>')
        };
        element.appendChild(this._button);
    }
}

export default Image;