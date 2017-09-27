import {strToHtmlElements} from "../../util/FunctionUtils";

class Bold {
    leiEditor;
    leiDocument;
    html = '<button class="LeiEditor-button"><i class="icon-font icon-bold"></i></button>';
    //event需要使用箭头函数处理this指针的问题
    event = () => {
        this.leiDocument.execCommand('bold')
    };
    constructor(leiEditor, document) {
        this.leiEditor = leiEditor;
        this.leiDocument = document;
    }
    addInContainer(container){
        const element = strToHtmlElements(this.html);
        element[0].onclick = this.event;
        container.appendChild(element[0]);
        return true;
    }
}

export default Bold;