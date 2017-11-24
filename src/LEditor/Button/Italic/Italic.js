import {addClassName, removeClassName, strToElement} from "../../Util/domUtil";

class Italic {
    _button;
    _editor;
    _template = '<button><i class="icon-font icon-italic"></i></button>';

    constructor(editor) {
        this._editor = editor;
    }
    eventListen() {
        this._editor.configEventListener('click' , (e)=>{
            if (e.target.tagName === 'I') {
                addClassName(this._button , 'lei-active');
            } else {
                removeClassName(this._button , 'lei-active');
            }
        })
    }
    render(element) {
        this._button = strToElement(this._template)[0];
        this._button.onclick = (e)=>{
            this._editor.execCommand('italic');
        };
        element.appendChild(this._button);
        this.eventListen();
    }
}

export default Italic;