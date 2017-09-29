import {paramTypeException} from "../Exception/UtilException";

const strToHtmlElements = (str) => {
    const div = document.createElement('div');
    div.innerHTML = str;
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
export {strToHtmlElements , htmlElementsToStr ,isHtmlElement }