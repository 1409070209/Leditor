import {domAttrUtil, strToHtmlElements} from "../../util/FunctionUtils";
import EventListenImpl from "../EventListenImpl";

class Title{
    leiEditor;
    leiDocument;
    html='<div class="LeiEditor-button-list">\n    <li><button class="LeiEditor-button"><i class="icon-font icon-H"></i></button></li><li><button class="LeiEditor-button LeiEditor-second-nav"><i class="icon-font icon-H1"></i></button></li><li><button class="LeiEditor-button LeiEditor-second-nav"><i class="icon-font icon-H2"></i></button></li><li><button class="LeiEditor-button LeiEditor-second-nav"><i class="icon-font icon-H3"></i></button></li><li><button class="LeiEditor-button LeiEditor-second-nav"><i class="icon-font icon-H4"></i></button></li><li><button class="LeiEditor-button LeiEditor-second-nav"><i class="icon-font icon-H5"></i></button></li><li><button class="LeiEditor-button LeiEditor-second-nav"><i class="icon-font icon-H6"></i></button></li></div>';

    configEventListen() {
        return new EventListenImpl('click' , () => {
            // console.log('Title的监听事件');
            // console.log(this.html);
        })
    }
    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
        // this.configEventListen();
    }
    event = () => {
        const element = this.buttonElement;
        for (let i = 1; i < element.childNodes.length; i++) {
            let item = element.childNodes[i];
            if (domAttrUtil.haveClassName(item.getElementsByTagName('button')[0] , 'LeiEditor-second-nav')) {
                domAttrUtil.removeClassName(item.getElementsByTagName('button')[0] , 'LeiEditor-second-nav')
            }else {
                domAttrUtil.addClassName(item.getElementsByTagName('button')[0] , 'LeiEditor-second-nav')
            }
        }
    };
    addInContainer(container){
        const element = strToHtmlElements(this.html)[0];
        element.childNodes[0].onclick = this.event;
        console.log(element.childNodes);
        this.buttonElement = element;
        container.appendChild(element);
        return true;
    }
}
export default Title;