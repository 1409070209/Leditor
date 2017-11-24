function strToElement(str) {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.children;
}
function haveClassName(element , styleClass){
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
function addClassName(element , styleClass){

    styleClass.trim();
    if (haveClassName(element , styleClass) === false) {
        element.className+= ` ${styleClass}`;
    }
}
function removeClassName(element , styleClass) {
    styleClass.trim();
    if (haveClassName(element , styleClass)) {
        element.className = element.className.replace(styleClass,'');
    }
}
export {strToElement , addClassName , haveClassName , removeClassName}