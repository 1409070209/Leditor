import {clearSpaceElement, domAttrUtil, strToHtmlElements} from "../../util/FunctionUtils";
import EventListenImpl from "../EventListenImpl";
import './Title.css'

class Title{
    leiEditor;
    leiDocument;
    html='<div class="LeiEditor-button-list">\n    <li class="LeiEditor-title-list"><button class="LeiEditor-button"><i class="icon-font icon-H"></i></button></li>\n    <li class="LeiEditor-title-drop-list LeiEditor-title-list LeiEditor-drop-none"><button class="LeiEditor-button"><i class="icon-font icon-H1"></i></button></li>\n    <li class="LeiEditor-title-drop-list LeiEditor-title-list LeiEditor-drop-none"><button class="LeiEditor-button"><i class="icon-font icon-H2"></i></button></li>\n    <li class="LeiEditor-title-drop-list LeiEditor-title-list LeiEditor-drop-none"><button class="LeiEditor-button"><i class="icon-font icon-H3"></i></button></li>\n    <li class="LeiEditor-title-drop-list LeiEditor-title-list LeiEditor-drop-none"><button class="LeiEditor-button"><i class="icon-font icon-H4"></i></button></li>\n    <li class="LeiEditor-title-drop-list LeiEditor-title-list LeiEditor-drop-none"><button class="LeiEditor-button"><i class="icon-font icon-H5"></i></button></li>\n    <li class="LeiEditor-title-drop-list LeiEditor-title-list LeiEditor-drop-none"><button class="LeiEditor-button"><i class="icon-font icon-H6"></i></button></li>\n</div>';
    buttonElement;

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
            if (domAttrUtil.haveClassName(item , 'LeiEditor-drop-none')) {
                domAttrUtil.removeClassName(item , 'LeiEditor-drop-none')
            }else {
                domAttrUtil.addClassName(item , 'LeiEditor-drop-none')
            }
        }
    };
    _dropEven = (index = 1) => {
        this.leiEditor.insertNode(strToHtmlElements(`<h${index}>这是一个标题</h${index}>`));
        this.event();
    };
    addInContainer(container){
        const element = clearSpaceElement(strToHtmlElements(this.html));
        const buttonList = element.getElementsByTagName('button');
        buttonList[0].onclick = this.event;
        for (let i = 1; i < buttonList.length; i++) {
            let item = buttonList[i];
            item.onclick = this._dropEven.bind(this,i);
        }
        this.buttonElement = element;
        container.appendChild(element);
        return true;
    }
}
export default Title;