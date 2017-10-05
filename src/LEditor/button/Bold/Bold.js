
import {clearSpaceElement, domAttrUtil, strToHtmlElements} from "../../util/FunctionUtils";
import EventListenImpl from "../EventListenImpl";
const _tagNameList = ['STRONG' , 'H1' , 'H2' , 'H3' , 'H4' , 'H5' , 'H6' , 'B'];
class Bold {
    leiEditor;
    leiDocument;
    html = '<div class="LeiEditor-button-list">\n    <li><button class="LeiEditor-button"><i class="icon-font icon-bold"></i></button></li>\n</div>';
    buttonElement;
    _eventListen(){
        const focusNode = this.leiEditor.getFocusNode();
        if (_tagNameList.indexOf(focusNode.tagName) !== -1) {
            domAttrUtil.addClassName(this.buttonElement , 'LeiEditor-button-close');
        } else {
            domAttrUtil.removeClassName(this.buttonElement , 'LeiEditor-button-close');
        }
    }
    configEventListen(){
        return new EventListenImpl('click' , () => this._eventListen());
    }

    //event需要使用箭头函数处理this指针的问题
    event = () => {
        this.leiDocument.execCommand('bold');
        if (domAttrUtil.haveClassName(this.buttonElement , 'LeiEditor-button-close')) {
            console.log('remove having');
        }

    };
    constructor(leiEditor, document) {
        this.leiEditor = leiEditor;
        this.leiDocument = document;
    }
    addInContainer(container){
        const element = clearSpaceElement(strToHtmlElements(this.html));
        element.childNodes[0].onclick = this.event;
        this.buttonElement = element;
        container.appendChild(element);
        return true;
    }
}

export default Bold;