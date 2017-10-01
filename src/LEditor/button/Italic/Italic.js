
import {strToHtmlElements} from "../../util/FunctionUtils";
import EventListenImpl from "../EventListenImpl";

class Italic{
    leiEditor;
    leiDocument;
    html='<button class="LeiEditor-button"><i class="icon-font icon-italic"></i></button>';
    buttonElement;


    configEventListen(){
        return new EventListenImpl('click' , () => {
            const focusNode = this.leiEditor.getFocusNode();
            if (focusNode.tagName === 'I') {
                console.log(this.buttonElement.outerHTML);
                // const fontElement = this.buttonElement.getElementsByTagName('i');
                // fontElement[0].className += ' LeiEditor-i-close';
                this.buttonElement.className += ' LeiEditor-button-close';
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
        const element = strToHtmlElements(this.html);
        element[0].onclick = this.event;
        this.buttonElement = element[0];
        container.appendChild(element[0]);
        return true;
    }
}
export default Italic;