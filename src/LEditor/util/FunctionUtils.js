import {paramTypeException} from "../Exception/UtilException";

const strToHtmlElements = (str) => {
    const div = document.createElement('div');
    div.innerHTML = str;
    if (div.childNodes.length === 1) {
        return div.childNodes[0];
    }
    return div.childNodes;
};
const htmlElementsToStr = (element) => {
    if (isHtmlElement(element) === false) {
        throw paramTypeException(typeof element,'htmlElement');
    }
    let str = '';
    for (let i = 0; i < element.length; i++) {
        let item = element[i];
        str += item.outerHTML;
    }
    return str;
};
const isHtmlElement = (param) => {
    if(typeof param === 'object'){
        return param instanceof HTMLElement;
    } else {
        return false;
    }
};
const isSpaceText = (element) => {
    if (element.nodeType !== 3) return false;
    for (let i = 0; i < element.nodeValue.length; i++) {
        let item = element.nodeValue[i];
        if (item !== '\n' && item !== ' ' && item !== '\t') {
            return false;
        }
    }
    return true;
};
const clearSpaceElement = (element) => {
    const elementCopy = element.cloneNode(true);
    const childNodes = elementCopy.childNodes;
    if (childNodes === null) {
        return childNodes;
    }
    for (let i = 0; i < childNodes.length; i++) {
        let item = childNodes[i];
        if (item.nodeType === 3 && isSpaceText(item)) {
            item.parentNode.removeChild(item);
        } else {
            item = clearSpaceElement(item);
        }
    }
    return elementCopy;
};
class DomAttrUtil {
    haveClassName(element , styleClass){
        if (isHtmlElement(element) === false) {
            throw paramTypeException(typeof element,'HtmlElement');
        }
        styleClass.trim();
        const classNameList = element.className;
        const classList = classNameList.split(' ');
        for (let i = 0; i < classList.length; i++) {
            let item = classList[i];
            if (styleClass === item){
                return true;
            }
        }
        return false;
    }
    addClassName(element , styleClass){
        if (isHtmlElement(element) === false) {
            return;
        }
        styleClass.trim();
        if (this.haveClassName(element , styleClass) === false) {
            element.className+= ` ${styleClass}`;
        }
    }
    removeClassName(element , styleClass) {
        if (isHtmlElement(element) === false) {
            return new paramTypeException(typeof element,'HtmlElement');
        }
        styleClass.trim();
        if (this.haveClassName(element , styleClass)) {
            element.className = element.className.replace(styleClass,'');
        }
    }
}
const domAttrUtil = new DomAttrUtil();
export { strToHtmlElements , htmlElementsToStr ,isHtmlElement,domAttrUtil,clearSpaceElement,isSpaceText }