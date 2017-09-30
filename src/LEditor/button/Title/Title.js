import {strToHtmlElements} from "../../util/FunctionUtils";

class Title{
    leiEditor;
    leiDocument;
    flag = true;
    html='<button class="LeiEditor-button"><i class="icon-font icon-H"></i></button>';

    configEventListen() {
        return {
            type: 'click',
            event: () => {
                console.log('Title的事件');
                console.log(this.html);
            }
        }
    }
    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
        // this.configEventListen();
    }
    event = () => {
        if (this.flag) {
            const h1 = '<h1>input</h1>';
            const element = strToHtmlElements(h1);
            this.leiEditor.insertNode(element[0]);
        }
    };
    addInContainer(container){
        const element = strToHtmlElements(this.html);
        element[0].onclick = this.event;
        container.appendChild(element[0]);
        return true;
    }
}
export default Title;