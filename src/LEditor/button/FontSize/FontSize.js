import {strToHtmlElements} from "../../util/FunctionUtils";

class FontSize{
    leiEditor;
    leiDocument;
    html='<button class="LeiEditor-button"><i class="icon-font icon-H"></i></button>';

    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }
    event = () => {
        const h1 = '<h1>input</h1>';
        const element = strToHtmlElements(h1);
        this.leiEditor.insertNode(element[0]);
    };
    addInContainer(container){
        const element = strToHtmlElements(this.html);
        element[0].onclick = this.event;
        container.appendChild(element[0]);
        return true;
    }
}
export default FontSize;