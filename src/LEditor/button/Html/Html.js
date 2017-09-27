import {strToHtmlElements} from "../../util/FunctionUtils";

class Html{
    leiEditor;
    leiDocument;
    html='<button class="LeiEditor-button"><i class="icon-font icon-HTML"></i></button>';

    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }
    event = () => {
        console.log(this.leiEditor.getHtml());
    };
    addInContainer(container){
        const element = strToHtmlElements(this.html);
        element[0].onclick = this.event;
        container.appendChild(element[0]);
        return true;
    }
}
export default Html;