import {strToHtmlElements} from "../../util/FunctionUtils";

class Undo{
    leiEditor;
    leiDocument;
    html='<div class="LeiEditor-button-list"><button class="LeiEditor-button"><i class="icon-font icon-undo"></i></button></div>';

    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }
    event = () => {
        this.leiDocument.execCommand('undo')
    };
    addInContainer(container){
        const element = strToHtmlElements(this.html)[0];
        element.childNodes[0].onclick = this.event;
        this.buttonElement = element;
        container.appendChild(element);
        return true;
    }
}
export default Undo;