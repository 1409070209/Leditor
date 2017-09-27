
import {createEditorException, deleteNodeException} from "./Exception/EditorException";

class Editor {
    editorBody;
    editorWindow;
    editorDocument;
    constructor(editor) {
        if (editor.tagName !== 'IFRAME') {
            throw createEditorException(editor.tagName)
        }
        const editorTitle = document.createElement('title');
        editorTitle.innerHTML = 'LEditor 雷屌出品';
        this.editorDocument = editor.contentWindow.document;
        this.editorHead = editor.contentWindow.document.head;
        this.editorBody = editor.contentWindow.document.body;
        this.editorWindow = editor.contentWindow.window;
        this.editorHead.appendChild(editorTitle);
        this.editorBody.contentEditable = true;

        //让编辑器获得焦点
        this.editorBody.focus();
    }
    getHtml() {
        return this.editorBody.innerHTML;
    }
    addHtml(str){
        console.log(this.editorBody.innerHTML);
        this.editorBody.appendChild(str);
    }
    getText() {
        return this.editorBody.innerText;
    }
    getDocument() {
        return this.editorDocument;
    }
    getSelection() {
        if (this.editorDocument.getSelection) {
            return this.editorDocument.getSelection();
        } else {
            return this.editorDocument.selection;
        }
    }
    getFocusNode(){
        const focusNode = this.getSelection().focusNode;
        return focusNode.parentNode;
    }
    insertNode(node) {
        const select = this.getSelection();
        this.deleteSelectNode();
        const range = select.getRangeAt(0);
        console.log(range);
        range.insertNode(node);
        const nextRange = range.cloneRange();
        nextRange.setStart(node,0);
        nextRange.setEnd(node,0);
        select.removeAllRanges();
        select.addRange(nextRange);
        return true;
    }
    deleteFocusNode() {
        const focusNode = this.getFocusNode();
        if (focusNode.tagName === 'BODY' || focusNode.tagName === 'HTML') {
            throw deleteNodeException(focusNode.tagName);
        } else {
            focusNode.parentNode.removeChild(focusNode);
        }
    }
    deleteSelectNode() {
        this.getSelection().deleteFromDocument();
    }
}

export default Editor;