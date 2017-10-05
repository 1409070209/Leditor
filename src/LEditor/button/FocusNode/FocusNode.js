
import {clearSpaceElement, strToHtmlElements} from "../../util/FunctionUtils";

class FocusNode{
    leiEditor;
    leiDocument;
    html='<div class="LeiEditor-button-list">\n    <li><button class="LeiEditor-button"><i class="icon-font icon-focus"></i></button></li>\n</div>';

    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }
    event = () => {
        console.log(this.leiEditor.getFocusNode());
    };
    addInContainer(container){
        const element = clearSpaceElement(strToHtmlElements(this.html));
        element.childNodes[0].onclick = this.event;
        this.buttonElement = element;
        container.appendChild(element);
        return true;
    }
}
export default FocusNode;