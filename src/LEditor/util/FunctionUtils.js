const strToHtmlElements = (str) => {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.childNodes;
};

export {strToHtmlElements}