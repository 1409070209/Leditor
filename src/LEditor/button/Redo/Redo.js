import {strToHtmlElements} from "../../util/FunctionUtils";

class Redo{
    leiEditor;
    leiDocument;
    html='<div class="LeiEditor-button-list"><button class="LeiEditor-button"><i class="icon-font icon-redo"></i></button></div>';

    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }
    event = () => {
        this.leiDocument.execCommand('redo')
    };
    addInContainer(container){
        const element = strToHtmlElements(this.html)[0];
        element.childNodes[0].onclick = this.event;
        this.buttonElement = element;
        container.appendChild(element);
        return true;
    }
}
export default Redo;