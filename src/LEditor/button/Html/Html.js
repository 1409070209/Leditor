
import {strToHtmlElements} from "../../util/FunctionUtils";
import EventListenImpl from "../EventListenImpl";

class Html{
    leiEditor;
    leiDocument;
    html='<button class="LeiEditor-button"><i class="icon-font icon-HTML"></i></button>';

    configEventListen() {
        return new EventListenImpl('click' , () => {
            console.log('Html的监听事件');
            console.log(this.html);
        })
    }
    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
        this.configEventListen();
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