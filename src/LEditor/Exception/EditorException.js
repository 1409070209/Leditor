const deleteNodeException = (tagName) => {
    return `can not delete a node which's tagName is ${tagName}`;
};

const insertNodeException = (message) => {
    return `can not insert node ${message}`;
};

const createEditorException = (tagName) => {
    return `you must give a iframe element but not a ${tagName}`;
}

export {deleteNodeException,insertNodeException,createEditorException}
