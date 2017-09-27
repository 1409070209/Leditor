import {strToHtmlElements} from "../util/FunctionUtils";

class Other{
    leiEditor;
    leiDocument;
    html='<button class="LeiEditor-button"><i class="icon-font icon-svgmoban17"></i></button>';

    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }
    event = () => {
        // this.leiEditor.deleteFocusNode();
        // this.leiEditor.deleteSelectNode();
    };

    addInContainer(container){
        const element = strToHtmlElements(this.html);
        element[0].onclick = this.event;
        container.appendChild(element[0]);
        return true;
    }
}
export default Other;