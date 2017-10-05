
import {clearSpaceElement, domAttrUtil, strToHtmlElements} from "../../util/FunctionUtils";
import EventListenImpl from "../EventListenImpl";

class Italic{
    leiEditor;
    leiDocument;
    html='<div class="LeiEditor-button-list">\n    <li><button class="LeiEditor-button"><i class="icon-font icon-italic"></i></button></li>\n</div>';
    buttonElement;


    configEventListen(){
        return new EventListenImpl('click' , () => {
            const focusNode = this.leiEditor.getFocusNode();
            if (focusNode.tagName === 'I') {
                domAttrUtil.addClassName(this.buttonElement , 'LeiEditor-button-close');
            } else {
                domAttrUtil.removeClassName(this.buttonElement , 'LeiEditor-button-close');
            }
        })
    }
    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }

    event = () => {
        this.leiDocument.execCommand('Italic');
    };

    addInContainer(container){
        const element = clearSpaceElement(strToHtmlElements(this.html));
        element.childNodes[0].onclick = this.event;
        this.buttonElement = element;
        container.appendChild(element);
        return true;
    }
}
export default Italic;