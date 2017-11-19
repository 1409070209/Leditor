
import {addClassName, removeClassName, strToElement} from "../../Util/domUtil";

class Bold {
    _editor;

    _template = '<button><i class="icon-font icon-bold"></i></button>';
    _button;
    constructor(editor) {
        this._editor = editor;
    }
    eventListen(e) {
        console.log(e.target);
        if (e.target.tagName === 'B' || e.target.tagName === 'STRONG') {
            addClassName(this._button , 'lei-active');
        } else {
            removeClassName(this._button , 'lei-active');
        }
    }
    render(element) {
        const button = strToElement(this._template)[0];
        this._button = button;
        this._button.onclick = (e)=>{
            this._editor.execCommand('bold');
        };
        element.appendChild(button);
        this._editor.configEventListener('click' , this.eventListen.bind(this));
    }
}

export default Bold;